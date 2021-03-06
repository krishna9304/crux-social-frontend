import { useState } from "react";
import { useSelector } from "react-redux";
import ClassmateProfileModal from "./classmateProfileModal";
const ClassmateProfile = ({ classmate }) => {
  const [isopen, setOpen] = useState(false);
  let globalState = useSelector((state) => state);
  return (
    <>
      <div
        onClick={() => {
          setOpen(!isopen);
        }}
        className="2xl:w-1/4 xl:w-1/4 lg:w-1/3 p-2 md:w-1/2 sm:w-1/2 w-full h-56"
      >
        <div className="flex flex-col hover:cursor-pointer justify-center items-center bg-gray-500 w-full rounded-t-md h-5/6">
          <div
            style={{
              background: `url(${classmate.profilepPic})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
            }}
            className="h-24 w-24 shadow-lg rounded-full bg-white"
          ></div>
        </div>
        <div className="bg-black text-white flex items-center px-4 text-sm h-1/6 rounded-b-md w-full">
          {classmate.name}
          {globalState.user._id === classmate._id ? " (You)" : ""}
        </div>
      </div>
      {isopen ? (
        <>
          {" "}
          <ClassmateProfileModal classmate={classmate} />{" "}
          <div
            onClick={() => {
              setOpen(false);
            }}
            className="h-6 w-6 m-2 hover:cursor-pointer hover:bg-gray-400 rounded-full p-1 fixed top-0 right-0"
          >
            {" "}
            <img className="w-full h-full" src="/x-mark-128.png" />{" "}
          </div>{" "}
        </>
      ) : null}
    </>
  );
};

export default ClassmateProfile;
