import MessengerLayoutDesktop from "../components/messengerLayoutDesktop";
import MessengerLayoutMobile from "../components/messengerLayoutMobile";
import { useMediaQuery } from "../utilities/mediaQuery";
import OnlineCard from "../components/onlineCard.js";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const OnlineMemebers = () => {
  let isPageWide = useMediaQuery("(min-width: 900px)");
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
    <div className="w-screen h-screen">
      {isPageWide ? (
        <MessengerLayoutDesktop />
      ) : (
        <MessengerLayoutMobile classname="h-screen">
          <div className="bg-gray-100 flex p-2  flex-col w-3/4 h-full">
            <div className="bg-white rounded-md flex items-center justify-center w-full h-10">
              Online Members
              <div className="bg-green-500 w-2.5 h-2.5 rounded-full mx-2"></div>
            </div>
            <div className="w-full h-full flex flex-col">
              {onlineUsers.map((item, index) => {
                if (item._id !== globalState.user._id) {
                  return <OnlineCard key={index} item={item} />;
                }
              })}
            </div>
          </div>
        </MessengerLayoutMobile>
      )}
    </div>
  );
};

export default OnlineMemebers;
