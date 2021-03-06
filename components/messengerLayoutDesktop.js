import Head from "next/head";
import NavBar from "../components/navbar";
import { useSelector } from "react-redux";
import OnlineCard from "./onlineCard.js";
import { useEffect, useState } from "react";
import MessageCard from "./messagecard";
import axios from "axios";
import { useMediaQuery } from "../utilities/mediaQuery";
import ChatBox from "../components/chatBox";
import { useRouter } from "next/router";

let MessengerLayoutDesktop = ({ classname = "" }) => {
  let isPageWide = useMediaQuery("(min-width: 900px)");
  let globalState = useSelector((state) => state);
  let [convos, setConvos] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [currItem, setCurrItem] = useState(null);
  let router = useRouter();

  useEffect(() => {
    axios
      .post(`${process.env.BACKEND_URL}/api/v1/inbox/getInbox`, {
        id: globalState.user._id,
      })
      .then((res) => {
        let users = res.data.users;
        for (let student of users) {
          axios
            .post(`${process.env.BACKEND_URL}/api/v1/student/getStudent`, {
              studentID: student,
            })
            .then((res) => {
              let user = res.data.student;
              setConvos((con) => [...con, user]);
            })
            .catch(console.error);
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
    <div
      className={
        "bg-gray-200 flex flex-col justify-start min-h-screen h-screen " +
        classname
      }
    >
      <Head>
        <title>Hey {globalState.user.name}!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div className="flex w-screen h-full">
        <div className="bg-gray-200 h-full pt-0 w-1/4">
          <div className="bg-gray-100 pr-2 overflow-y-auto w-full h-full">
            <div className="bg-gray-700 w-full h-10 flex items-center justify-center text-sm font-semibold text-white ">
              <img className="w-6 invert mx-2" src="/icons8-send-100.png" />{" "}
              Inbox
            </div>
            {convos.map((item, i) => {
              return (
                <MessageCard
                  setCurrItem={setCurrItem}
                  currItem={currItem}
                  key={i}
                  item={item}
                />
              );
            })}
          </div>
        </div>
        {currItem &&
        isPageWide &&
        (router.pathname === "/inbox" ||
          router.pathname === "/online-members") ? (
          <div className="bg-white w-1/2 h-full">
            <ChatBox
              className={"h-11/12 fixed top-14 w-1/2 bottom-0"}
              id={currItem._id}
              name={currItem.name}
              profilePic={currItem.profilepPic}
            />
          </div>
        ) : (
          <div className="bg-gray-200 flex flex-col justify-center items-center text-4xl text-gray-400 font-bold h-full w-1/2">
            Nothing to show here!
            <div className="bg-gray-200 flex justify-center items-center text-lg text-gray-400 font-bold">
              Click on an online member to start talking.
            </div>
          </div>
        )}
        <div className="bg-gray-100 p-2 pt-4 h-full w-1/4">
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
                    setCurrItem={setCurrItem}
                    currItem={currItem}
                    key={index}
                    item={item}
                  />
                );
              }
            })}
          </div>
          <div className="text-xs font-light text-gray-500 my-1">
            Copyright ????? The Coterie Crux, 2021
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessengerLayoutDesktop;
