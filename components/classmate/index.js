import { useState } from "react";
import ClassmateProfileModal from "./classmateProfileModal";
const ClassmateProfile = () => {
  const [isopen, setOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => {
          setOpen(!isopen);
        }}
        className="2xl:w-1/4 xl:w-1/4 lg:w-1/3 p-2 md:w-1/2 sm:w-1/2 w-full  h-56"
      >
        <div className="flex justify-center items-center bg-gray-500 w-full rounded-md h-full p-0">
          <div className="h-24 w-24 shadow-lg rounded-full bg-white"></div>
        </div>
      </div>
      {isopen ? (
        <>
          {" "}
          <ClassmateProfileModal />{" "}
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
