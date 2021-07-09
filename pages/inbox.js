import axios from "axios";
import { useEffect, useState } from "react";
import MessengerLayoutDesktop from "../components/messengerLayoutDesktop";
import MessengerLayoutMobile from "../components/messengerLayoutMobile";
import { useMediaQuery } from "../utilities/mediaQuery";
import MessageCard from "../components/messagecard";
import { useSelector } from "react-redux";
const Inbox = () => {
  let isPageWide = useMediaQuery("(min-width: 900px)");
  let [convos, setConvos] = useState([]);
  let globalState = useSelector((state) => state);

  useEffect(() => {
    axios
      .post("http://localhost:8080/api/v1/inbox/getInbox", {
        id: globalState.user._id,
      })
      .then((res) => {
        let users = res.data.users;
        for (let student of users) {
          axios
            .post("http://localhost:8080/api/v1/student/getStudent", {
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
  }, []);

  return (
    <div className="w-screen h-screen">
      {isPageWide ? (
        <MessengerLayoutDesktop />
      ) : (
        <MessengerLayoutMobile classname="h-screen">
          <div className="h-full flex items-center flex-col w-full">
            <div className="bg-gray-100 overflow-y-auto w-11/12 h-full">
              <div className="bg-gray-700 w-full h-10 flex items-center justify-center text-sm font-semibold text-white ">
                <img className="w-6 invert mx-2" src="/icons8-send-100.png" />{" "}
                Inbox
              </div>
              {convos.map((item, i) => {
                return (
                  <MessageCard
                    id={item._id}
                    name={item.name}
                    profilePic={item.profilepPic}
                    key={i}
                  />
                );
              })}
            </div>
          </div>
        </MessengerLayoutMobile>
      )}
    </div>
  );
};

export default Inbox;
