import Head from "next/head";
import NavBar from "../components/navbar";
import { useSelector } from "react-redux";
import OnlineCard from "./onlineCard.js";
import { useEffect, useState } from "react";

let MessengerLayoutDesktop = ({ classname = "" }) => {
  let globalState = useSelector((state) => state);
  const [onlineUsers, setOnlineUsers] = useState([]);
  useEffect(() => {
    if (globalState.socket) {
      globalState.socket.emit("GET_ONLINE_USERS", globalState.user._id);
      globalState.socket.on("ONLINE_USERS", (user) => {
        setOnlineUsers(user);
      });
    }
  }, []);

  return (
    <div
      className={
        "bg-gray-200 flex flex-col justify-start min-h-screen h-screen" +
        classname
      }
    >
      <Head>
        <title>Hey {globalState.user.name}!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div className="flex w-screen h-full">
        <div className="bg-gray-200 h-full w-1/4"></div>
        <div className="bg-gray-200 h-full w-1/2"></div>
        <div className="bg-gray-200 p-2 pt-4 h-full w-1/4">
          <div
            style={{
              minHeight: "30rem",
            }}
            className="shadow-sm overflow-y-auto rounded-md px-2 w-full bg-white"
          >
            <div className="px-2 py-2 text-md text-gray-500 font-semibold">
              Online Members
            </div>
            <hr className="bg-black" />
            {onlineUsers.map((item, index) => {
              if (item._id !== globalState.user._id) {
                return (
                  <OnlineCard
                    key={index}
                    id={item._id}
                    profilePic={item.profilepPic}
                    name={item.name}
                  />
                );
              }
            })}
          </div>
          <div className="text-xs font-light text-gray-500 my-1">
            Copyright ©️ The Coterie Crux, 2021
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessengerLayoutDesktop;
