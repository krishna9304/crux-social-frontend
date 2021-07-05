import { useState } from "react";
import Link from "next/link";

const NavProfileIcon = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => {
          setOpen(open ? false : true);
        }}
        className="bg-white rounded-full w-10 h-10"
      ></div>
      <div
        className={`fixed ${
          open ? "" : "hidden"
        } w-48 lg:w-1/6 md:w-1/4 sm:w-1/3 top-14 shadow-md rounded-lg right-2 my-2 border-r-2 py-2 px-1 bg-white`}
      >
        <div className="mr-2">
          <div className="w-full px-2 text-sm font-light text-gray-400 ">
            Dashboard
          </div>
          <hr className="w-full h-0.1 m-1 bg-gray-100" />
          <div className="w-full hover:cursor-pointer hover:font-bold hover:text-gray-900 px-4 py-2 text-xs font-light">
            Edit Profile
          </div>
          <div className="w-full px-4 pb-2 text-xs font-light hover:cursor-pointer hover:font-bold hover:text-gray-900  ">
            Messages
          </div>
        </div>
        <div className="mr-2">
          <div className="w-full px-2 text-sm font-light text-gray-400 ">
            Settings
          </div>
          <hr className="w-full h-0.1 m-1 bg-gray-100" />
          <div className="w-full hover:cursor-pointer hover:font-bold hover:text-gray-900 px-4 py-2 text-xs font-light">
            Help
          </div>
          <div className="w-full px-4 pb-2 text-xs hover:cursor-pointer font-bold text-red-700 ">
            Log Out
          </div>
        </div>
      </div>
    </>
  );
};

export default NavProfileIcon;
