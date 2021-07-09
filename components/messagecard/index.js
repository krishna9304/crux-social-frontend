import { useState } from "react";
import { useRouter } from "next/router";
import { useMediaQuery } from "../../utilities/mediaQuery";
import ChatBox from "../chatBox";
const MessageCard = ({ name, profilePic, id }) => {
  let isPageWide = useMediaQuery("(min-width: 900px)");
  let router = useRouter();
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => {
          setOpen(!open);
        }}
        className="w-full flex py-4 px-2 border-b hover:bg-gray-200 bg-white hover:cursor-pointer"
      >
        <div className="w-1/6 flex items-center justify-center mr-2">
          <div className="w-8 h-8 rounded-full">
            <img className="w-full h-full rounded-full" src={profilePic} />
          </div>
        </div>
        <div className="flex flex-grow text-sm items-center">{name}</div>
      </div>
      {open &&
      isPageWide &&
      (router.pathname === "/inbox" ||
        router.pathname === "/online-members") ? (
        <div className="bg-white fixed w-1/2 h-11/12 top-14 bottom-0 left-1/4">
          <ChatBox
            className={"h-full w-full"}
            id={id}
            name={name}
            profilePic={profilePic}
          />
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

export default MessageCard;
