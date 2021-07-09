import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import {
  setAuth,
  setClassmates,
  setCollege,
  setSocket,
  setUser,
} from "../../../redux/actions/actions";

const NavProfileIcon = () => {
  let globalState = useSelector((state) => state);
  let dispatch = useDispatch();
  let router = useRouter();
  let logOut = () => {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
    dispatch(setAuth(false));
    dispatch(setUser(null));
    dispatch(setClassmates([]));
    dispatch(setSocket(null));
    dispatch(setCollege(""));
    router.push("/");
    window.location.reload();
  };
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => {
          setOpen(open ? false : true);
        }}
        style={{
          background: `url(${globalState.user.profilepPic})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
        className="bg-white rounded-full w-10 h-10"
      ></div>
      <div
        className={`fixed ${
          open ? "" : "hidden"
        } w-48 lg:w-1/6 md:w-1/4 top-14 sm:w-1/3 shadow-md rounded-lg right-2 my-2 border-r-2 py-2 px-1 bg-white`}
      >
        <div className="mr-2">
          <div className="w-full px-2 text-sm font-light text-gray-400 ">
            Dashboard
          </div>
          <hr className="w-full h-0.1 m-1 bg-gray-100" />
          <div className="w-full hover:cursor-pointer hover:font-bold hover:text-gray-900 px-4 py-2 text-xs font-light">
            Edit Profile
          </div>
          <div
            onClick={() => {
              router.push("/inbox");
            }}
            className="w-full px-4 pb-2 text-xs font-light hover:cursor-pointer hover:font-bold hover:text-gray-900  "
          >
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
          <div
            onClick={() => {
              logOut();
            }}
            className="w-full px-4 pb-2 text-xs hover:cursor-pointer font-bold text-red-700 "
          >
            Log Out
          </div>
        </div>
      </div>
    </>
  );
};

export default NavProfileIcon;
