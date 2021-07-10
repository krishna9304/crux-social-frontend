import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Message from "../message";
import { useMediaQuery } from "../../utilities/mediaQuery";
import ChatBox from "../chatBox";
import { useRef } from "react";
const ClassmateProfileModal = ({ classmate }) => {
  let isPageWide = useMediaQuery("(min-width: 1100px)");
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");
  const [chats, setChats] = useState([]);
  let globalState = useSelector((state) => state);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chats]);

  useEffect(() => {
    const ac = new AbortController();
    globalState.socket.on("NEW_MSG", (data) => {
      setChats((msgs) => [...msgs, data]);
    });
    return () => ac.abort();
  }, []);
  return (
    <>
      <div className="fixed inset-0 overflow-y-auto">
        <div className="fixed inset-0 backdrop-brightness-50 bg-opacity-75 transition-opacity"></div>
        <div className="flex items-end w-screen justify-center h-screen xl:p-14 xl:px-56  2xl:p-14 2xl:px-56 text-center sm:block p-8 py-14">
          <div className="flex flex-col h-full w-full bg-white rounded-lg shadow-xl transform transition-all ">
            <div
              style={{
                background: `url(${classmate.coverPhoto})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
              }}
              className="top-0 rounded-t-xl bg-red-400 w-full h-40"
            ></div>
            <div className="w-full h-full flex flex-col justify-center items-center">
              <div className="flex mt-2 items-center w-full justify-center">
                <div
                  style={{
                    background: `url(${classmate.profilepPic})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                  }}
                  className="border-4 border-gray-900 w-32 h-32 rounded-full"
                ></div>
              </div>
              <div className="w-full flex flex-col items-center">
                <div className="mt-2 font-semibold text-2xl">
                  {classmate.name}
                </div>
                <div className="text-xs font-light">
                  Year-{classmate.year}, {classmate.regdNo}, Section-
                  {classmate.section}
                </div>
                <div className=" px-2 py-1 mt-4 hover:text-pink-900 hover:cursor-pointer rounded-3xl text-blue-900 font-medium border border-gray-400 text-sm">
                  🎓 Computer Science Engineering
                </div>
                <div className="mt-4 flex items-center max-w-md px-6 justify-center text-center font-light text-gray-500 text-sm">
                  {classmate.bio}
                </div>
                <div className="flex mt-4 w-full justify-between max-w-sm px-4">
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
                <div className="flex py-10 px-6 items-center justify-around  w-full h-40">
                  <div
                    onClick={() => {
                      open ? setOpen(false) : setOpen(true);
                      axios
                        .post(
                          `${process.env.BACKEND_URL}/api/v1/chats/getChats`,
                          {
                            to: classmate._id,
                            id: globalState.user._id,
                          }
                        )
                        .then((res) => {
                          setChats(res.data.chats);
                        });
                    }}
                    className="hover:cursor-pointer hover:bg-gray-100 text-xs flex flex-col justify-center items-center h-full w-1/3 rounded-2xl border"
                  >
                    <img className="w-10 h-10" src="/icons8-send-100.png" />
                    Message
                  </div>
                  <div className="hover:cursor-pointer hover:bg-gray-100 text-xs pt-1 flex flex-col mx-6 justify-center items-center h-full rounded-2xl border w-1/3">
                    <img
                      className="w-10 mb-2 h-10"
                      src="/icons8-send-hot-list-100.png"
                    />
                    Add Friend
                  </div>
                  <div className="hover:cursor-pointer hover:bg-gray-100 text-xs pt-1 flex flex-col justify-center items-center h-full w-1/3 rounded-2xl border">
                    <img className="w-10 mb-1 h-10" src="/icons8-view-90.png" />
                    See Posts
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {open && isPageWide ? (
        <div className="bg-gray-100 border shadow-lg bottom-0 right-10 fixed w-80 h-1/2 rounded-lg">
          <div
            onClick={() => {
              setOpen(false);
            }}
            className="bg-white flex hover:cursor-pointer w-full h-10"
          >
            <div className="flex items-center justify-center w-1/6 h-full">
              <img
                style={{
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                className="border border-gray-900 h-8 w-8 rounded-full"
                src={classmate.profilepPic}
              />
            </div>
            <div className="text-xs flex items-center font-light px-2">
              {classmate.name}
            </div>
          </div>
          <hr className="bg-black" />
          <div className="flex flex-col w-full h-full">
            <div className="w-full overflow-y-auto h-full pr-2">
              {chats.map((item, key) => {
                return (
                  <Message
                    key={key}
                    msgVal={item.msg}
                    me={item.sentFrom === globalState.user._id}
                    profilePic={classmate.profilepPic}
                  />
                );
              })}
              <div ref={messagesEndRef} />
            </div>
            <div className="flex px-2 w-full h-10 mb-11">
              <input
                onChange={(e) => {
                  setMsg(e.target.value);
                }}
                value={msg}
                className="bg-white w-5/6 rounded-full outline-none text-sm shadow-md font-light h-10 px-2"
                placeholder="Write a message..."
              />
              <button
                onClick={() => {
                  axios
                    .post(`${process.env.BACKEND_URL}/api/v1/chats/addChat`, {
                      to: classmate._id,
                      from: globalState.user._id,
                      msg: msg,
                    })
                    .then((res) => {
                      if (res.data.res) {
                        globalState.socket.emit("NEW_MSG", {
                          msg,
                          sentTo: classmate._id,
                          sentFrom: globalState.user._id,
                        });
                      }
                    })
                    .catch(console.log);
                  setMsg("");
                }}
                className="flex-grow ml-2 bg-gray-900 text-white rounded-full"
              >
                ►
              </button>
            </div>
          </div>
        </div>
      ) : null}
      {open && !isPageWide ? (
        <>
          <ChatBox
            className="fixed top-0 left-0 h-screen w-screen"
            id={classmate._id}
            name={classmate.name}
            profilePic={classmate.profilepPic}
          />{" "}
          <div className="fixed top-0 right-0 w-6 h-6 m-2">
            <img className="w-full h-full invert " src="/x-mark-128.png" />
          </div>{" "}
        </>
      ) : null}
    </>
  );
};

export default ClassmateProfileModal;
