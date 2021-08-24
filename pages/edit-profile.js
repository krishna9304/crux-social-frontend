import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import NavBar from "../components/navbar";
const EditProfile = () => {
  const globalState = useSelector((state) => state);
  const [userData, setUserData] = useState({
    _id: globalState.user._id,
    year: globalState.user.year,
    section: globalState.user.section,
    bio: globalState.user.bio,
    password: "",
  });
  const [rePass, setRePass] = useState("");
  return (
    <div className="w-screen h-screen bg-gray-200">
      <NavBar />
      <div className="overflow-y-auto bg-gray-200">
        <form className="max-w-2xl mx-auto shadow-md md:w-3/4">
          <div className="p-4 bg-gray-100 rounded-lg bg-opacity-5">
            <div className="max-w-sm mx-auto md:w-full md:mx-0">
              <div className="inline-flex items-center space-x-4">
                <a href="#" className="block relative">
                  <img
                    alt="profil"
                    src={globalState.user.profilepPic}
                    className="mx-auto object-cover rounded-full h-16 w-16 "
                  />
                </a>
                <h1 className="text-gray-600">{globalState.user.name}</h1>
              </div>
            </div>
          </div>
          <div className="space-y-6 bg-white">
            <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0 gap-2">
              <h2 className="max-w-sm mx-auto md:w-1/3">Account</h2>
              <div className="max-w-sm mx-auto md:w-2/3 text-sm font-bold">
                Email:
                <div>
                  <input
                    disabled
                    type="text"
                    className="disabled:bg-gray-200 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-500 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Email"
                    value={globalState.user.email}
                  />
                </div>
              </div>
              <div className="max-w-sm mx-auto md:w-2/3 text-sm font-bold">
                Registration No.:
                <div>
                  <input
                    disabled
                    type="text"
                    className="disabled:bg-gray-200 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-500 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Email"
                    value={globalState.user.regdNo}
                  />
                </div>
              </div>
            </div>
            <hr />
            <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
              <h2 className="max-w-sm mx-auto md:w-1/3">Personal info</h2>
              <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
                <div className="text-sm font-bold">
                  Name:
                  <div className=" relative ">
                    <input
                      disabled
                      value={globalState.user.name}
                      type="text"
                      className="disabled:bg-gray-200 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-500 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="text-sm font-bold">
                  Year:
                  <div className=" relative ">
                    <input
                      onChange={(e) => {
                        setUserData({ ...userData, year: e.target.value });
                      }}
                      type="text"
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Year"
                      value={userData.year}
                    />
                  </div>
                </div>
                <div className="text-sm font-bold">
                  Section:
                  <div className=" relative ">
                    <input
                      onChange={(e) => {
                        setUserData({ ...userData, section: e.target.value });
                      }}
                      type="text"
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Section"
                      value={userData.section}
                    />
                  </div>
                </div>
                <div className="text-sm font-bold">
                  Bio:
                  <div className=" relative ">
                    <textarea
                      onChange={(e) => {
                        setUserData({ ...userData, bio: e.target.value });
                      }}
                      type="text"
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="bio"
                      value={userData.bio}
                    />
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="items-center w-full p-8 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
              <h2 className="max-w-sm mx-auto md:w-4/12">Change password</h2>
              <div className="w-full max-w-sm pl-2 mx-auto space-y-5 md:w-5/12 md:pl-9 md:inline-flex">
                <div className=" relative ">
                  <input
                    onChange={(e) => {
                      setUserData({ ...userData, password: e.target.value });
                    }}
                    type="password"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Enter Password"
                    value={userData.password}
                  />
                </div>
              </div>
              <div className="w-full max-w-sm pl-2 mx-auto space-y-5 md:w-5/12 md:pl-9 md:inline-flex">
                <div className=" relative ">
                  <input
                    onChange={(e) => {
                      setRePass(e.target.value);
                    }}
                    type="password"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Re-enter Password"
                    value={rePass}
                  />
                </div>
              </div>
            </div>
            <hr />
            <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
              <button
                onClick={() => {
                  if (userData.password === rePass) {
                    axios
                      .post(
                        `${process.env.BACKEND_URL}/api/v1/student/updateStudent`,
                        userData
                      )
                      .then((res) => {
                        if (res.data.res) {
                          window.alert("Profile updated successfully!");
                          console.log(res.data.userData);
                        } else {
                          window.alert("Updation failed!");
                        }
                      })
                      .catch(console.error);
                  } else {
                    window.alert("Password not matched!");
                  }
                }}
                type="submit"
                className="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
