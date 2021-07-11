import CreateAPost from "./createAPost";
import Post from "../Post";
import OnlineCard from "../onlineCard.js";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setTimeline } from "../../redux/actions/actions";
const DesktopLayout = () => {
  let globalState = useSelector((state) => state);
  const [onlineUsers, setOnlineUsers] = useState([]);
  let dispatch = useDispatch();
  useEffect(() => {
    axios
      .post(`${process.env.BACKEND_URL}/api/v1/post/gettimeline`, {
        id: globalState.user._id,
      })
      .then((res) => {
        if (res.data.res) {
          dispatch(setTimeline(res.data.timeline));
        }
      })
      .catch(console.error);
    if (globalState.socket) {
      globalState.socket.emit("GET_ONLINE_USERS", globalState.user._id);
      globalState.socket.on("ONLINE_USERS", (user) => {
        setOnlineUsers(user);
      });
    }
  }, []);
  return (
    <div className="flex py-2 h-screen w-screen">
      <div className="border-r border-gray-300 p-4 flex flex-col justify-center items-center w-1/4 h-full overflow-y-auto">
        <div className="flex flex-col justify-center items-center">
          <div
            style={{
              background: `url(${globalState.user.profilepPic})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
            }}
            className="w-60 h-60 rounded-full shadow-md"
          ></div>
          <div className="mt-2 font-semibold text-2xl">
            {globalState.user.name}
          </div>
          <div className="text-xs font-light">
            Year-{globalState.user.year}, {globalState.user.regdNo}, Section-
            {globalState.user.section}
          </div>
          <div className="px-2 py-1 mt-4 hover:text-pink-900 hover:cursor-pointer rounded-3xl text-blue-900 font-medium border border-gray-400 text-sm">
            🎓 Computer Science Engineering
          </div>
          <div className="mt-4 flex items-center justify-center text-center font-light text-gray-500 text-sm">
            {globalState.user.bio}
          </div>
          <div className="flex mt-4 w-full justify-between px-4">
            <img
              className="hover:bg-gray-300 hover:cursor-pointer w-10 border border-gray-300 rounded-full p-1"
              src="/fb.png"
            />
            <img
              className="hover:bg-gray-300 hover:cursor-pointer w-10 border border-gray-300 rounded-full p-1"
              src="/insta.png"
            />
            <img
              className="hover:bg-gray-300 hover:cursor-pointer w-10 border border-gray-300 rounded-full p-1"
              src="/linkedin.png"
            />
            <img
              className="hover:bg-gray-300 hover:cursor-pointer w-10 border border-gray-300 rounded-full p-1"
              src="/twitter.png"
            />
            <img
              className="hover:bg-gray-300 hover:cursor-pointer w-10 border border-gray-300 rounded-full p-1"
              src="/github.png"
            />
          </div>
        </div>
      </div>
      <div className="overflow-y-scroll py-4 pb-0 px-16 w-1/2 h-full">
        <CreateAPost />
        <hr className="bg-black w-full my-6 border-t border-gray-300 " />
        {globalState.timeline.map((item, i) => {
          return <Post item={item} key={i} />;
        })}
      </div>
      <div className="w-1/4 border-l border-gray-300 p-4 h-full">
        <div
          style={{
            minHeight: "40rem",
          }}
          className="shadow-sm rounded-md px-2 w-full h-5/6 bg-white"
        >
          <div className="px-2 py-2 text-md text-gray-500 font-semibold">
            Online Members
          </div>
          <hr className="bg-black" />
          {onlineUsers.map((item, index) => {
            if (item._id !== globalState.user._id) {
              return <OnlineCard key={index} item={item} />;
            }
          })}
        </div>
        <div className="text-xs font-light text-gray-500 my-1">
          Copyright ©️ The Coterie Crux, 2021
        </div>
      </div>
    </div>
  );
};

export default DesktopLayout;
