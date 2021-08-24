import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NavBar from "../../components/navbar";
import Post from "../../components/Post";

const ClassMateProfile = () => {
  const router = useRouter();
  const { id } = router.query;
  const globalState = useSelector((state) => state);
  const [classmate, setClassmate] = useState({});
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    globalState.classmates.map((currClassmate) => {
      if (String(currClassmate._id) === String(id)) {
        console.log(currClassmate);
        setClassmate(currClassmate);
      }
    });
  }, [globalState.classmates]);
  useEffect(() => {
    axios
      .post(`${process.env.BACKEND_URL}/api/v1/student/showPosts`, {
        studentID: id,
      })
      .then((res) => {
        if (res.data.res) {
          setPosts(res.data.posts);
        }
      })
      .catch(console.error);
  }, []);
  return (
    <div className="h-screen w-screen bg-gray-200">
      <NavBar />
      <div className="w-screen bg-white px-6">
        <div className="p-4 bg-gray-100 rounded-lg bg-opacity-5">
          <div className="max-w-sm mx-auto md:w-full md:mx-0">
            <div className="inline-flex items-center space-x-4">
              <div className="block relative">
                <img
                  alt="profil"
                  src={classmate.profilepPic}
                  className="mx-auto object-cover rounded-full h-16 w-16 "
                />
              </div>
              <h1 className="text-gray-600">{classmate.name}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-screen flex flex-col items-center">
        <h1 className="font-bold text-3xl my-4">{classmate.name}'s Posts</h1>
        <div className="w-full px-8">
          {posts.map((item, idx) => {
            return <Post item={item} key={idx} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ClassMateProfile;
