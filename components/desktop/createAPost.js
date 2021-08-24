import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { setTimeline } from "../../redux/actions/actions";

const CreateAPost = ({ timeline, setTimeline }) => {
  let globalState = useSelector((state) => state);
  let [err, setErr] = useState({});
  const dispatch = useDispatch();
  const [post, setNewPost] = useState({
    picture: null,
    caption: "",
    postedBy: globalState.user._id,
  });
  const [chosen, setChosen] = useState(false);
  let createNewPost = async () => {
    if (post.postedBy && (post.picture || post.caption)) {
      const formData = new FormData();
      formData.append("picture", post.picture);
      formData.append("caption", post.caption);
      formData.append("postedBy", globalState.user._id);
      formData.append("timestamp", String(Date.now()));
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      let res = await axios.post(
        `${process.env.BACKEND_URL}/api/v1/post/createPost`,
        formData,
        config
      );
      if (!res.data.res) {
        setErr({
          show: true,
          msg: "",
        });
      } else {
        await setTimeline([res.data.post, ...timeline]);
        setNewPost({
          picture: null,
          caption: "",
          postedBy: globalState.user._id,
        });
        setChosen(false);
      }
    } else {
      setErr({
        show: true,
        msg: "Please fill all the details and try again",
      });
    }
  };
  return (
    <div
      style={{
        minHeight: "7rem",
      }}
      className="flex bg-white w-full p-2 px-2 rounded-md shadow-sm"
    >
      <div className="w-1/12">
        <div
          style={{
            background: `url(${globalState.user.profilepPic})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
          }}
          className="w-10 lg:w-8 lg:h-8 rounded-full h-10 bg-gray-700"
        ></div>
      </div>
      <div className="w-11/12 pl-4 xl:px-0 lg:px-0 md:px-0">
        <textarea
          value={post.caption}
          onChange={(e) => {
            setNewPost({
              ...post,
              caption: e.target.value,
            });
          }}
          style={{
            minHeight: "3.5rem",
          }}
          className="text-gray-700 bg-gray-100 rounded-3xl outline-none px-4 py-1 text-xs w-full"
          placeholder="Create a post..."
        />
        <div className="flex justify-between pt-2 h-10 w-full">
          <label
            className={
              "flex justify-around items-center px-2 text-blue rounded-lg shadow-sm uppercase border border-gray-900 cursor-pointer hover:bg-gray-900 hover:text-white " +
              (chosen ? "bg-gray-900 text-white" : "")
            }
          >
            <svg
              className="w-6 h-6 mr-2"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
            </svg>
            <span
              style={{
                fontSize: "0.6rem",
              }}
            >
              {chosen ? "Selected! " : "Select a file"}
            </span>
            <input
              accept="image/*"
              onChange={(e) => {
                setChosen(true);
                setNewPost({
                  ...post,
                  picture: e.target.files[0],
                });
              }}
              name="image"
              type="file"
              className="hidden"
            />
          </label>

          <div
            onClick={() => {
              createNewPost();
            }}
            className="hover:cursor-pointer hover:bg-gray-800 active:bg-black bg-gray-900 text-white w-1/6 text-sm font-medium flex justify-center items-center border border-gray-200 rounded-md"
          >
            Post
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAPost;
