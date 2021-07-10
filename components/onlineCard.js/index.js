import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Message from "../message";
import { useMediaQuery } from "../../utilities/mediaQuery";
import ChatBox from "../chatBox";
import { useRouter } from "next/router";
import { useRef } from "react";

const OnlineCard = ({ item, currItem, setCurrItem }) => {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");
  const [chats, setChats] = useState([]);
  let globalState = useSelector((state) => state);
  let isPageWide = useMediaQuery("(min-width: 900px)");
  let router = useRouter();
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chats]);

  let id = item._id,
    profilePic = item.profilepPic,
    name = item.name;

  useEffect(() => {
    globalState.socket.on("NEW_MSG", (data) => {
      setChats((msgs) => [...msgs, data]);
    });
  }, []);
  return (
    <>
      <div
        onClick={() => {
          if (isPageWide && typeof setCurrItem !== "undefined") {
            if (currItem === item) {
              setCurrItem(null);
            } else {
              setCurrItem(item);
            }
          }
          open ? setOpen(false) : setOpen(true);
          axios
            .post(`${process.env.BACKEND_URL}/api/v1/chats/getChats`, {
              to: id,
              id: globalState.user._id,
            })
            .then((res) => {
              setChats(res.data.chats);
            });
        }}
        className="flex hover:cursor-pointer hover:bg-gray-200 rounded-lg p-1 w-full my-2"
      >
        <div className="flex items-center justify-center w-1/6 h-10">
          <div
            style={{
              background: `url(${profilePic})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
            }}
            className="w-8 h-8 bg-gray-600 rounded-full"
          ></div>
        </div>
        <div className="w-2/3 h-10 text-xs font-light flex items-center px-4">
          {name}
        </div>
        <div className="flex justify-center items-center w-1/6 h-10">
          <div className="w-2.5 h-2.5 bg-green-600 rounded-full"></div>
        </div>
      </div>
      {open &&
      isPageWide &&
      router.pathname !== "/inbox" &&
      router.pathname !== "/online-members" ? (
        <div className="bg-gray-100 border shadow-lg bottom-0 right-60 fixed w-80 h-1/2 rounded-lg">
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
                src={profilePic}
              />
            </div>
            <div className="text-xs flex items-center font-light px-2">
              {name}
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
                    profilePic={profilePic}
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
                      to: id,
                      from: globalState.user._id,
                      msg: msg,
                    })
                    .then((res) => {
                      if (res.data.res) {
                        globalState.socket.emit("NEW_MSG", {
                          msg,
                          sentTo: id,
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
            id={id}
            name={name}
            profilePic={profilePic}
          />{" "}
          <div
            onClick={() => {
              setOpen(false);
            }}
            className="hover:cursor-pointer hover:bg-gray-200 rounded-full p-1 fixed top-0 right-0 w-6 h-6 m-2"
          >
            <img className="w-full h-full invert " src="/x-mark-128.png" />
          </div>{" "}
        </>
      ) : null}
    </>
  );
};

export default OnlineCard;
