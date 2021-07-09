import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Message from "../message";

const ChatBox = ({ id, profilePic, name, className }) => {
  const [msg, setMsg] = useState("");
  let globalState = useSelector((state) => state);
  const [chats, setChats] = useState([]);
  useEffect(() => {
    const ac = new AbortController();
    globalState.socket.on("NEW_MSG", (data) => {
      setChats((msgs) => [...msgs, data]);
    });
    return () => ac.abort();
  }, []);
  return (
    <div
      onLoad={() => {
        axios
          .post(`${process.env.BACKEND_URL}/api/v1/chats/getChats`, {
            to: id,
            id: globalState.user._id,
          })
          .then((res) => {
            setChats(res.data.chats);
          });
      }}
      className={"bg-gray-300 " + className}
    >
      <div className="bg-white flex hover:cursor-pointer w-full h-10">
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
        <div className="text-xs flex items-center font-light px-2">{name}</div>
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
        </div>
        <div className="flex px-2 w-full h-10 mb-11">
          <input
            onKeyUp={(e) => {
              if (e.key === "Enter") {
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
              }
            }}
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
  );
};

export default ChatBox;
