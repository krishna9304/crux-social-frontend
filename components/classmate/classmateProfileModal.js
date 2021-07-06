import { useState } from "react";

const ClassmateProfileModal = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      {open ? (
        <div className="fixed inset-0 overflow-y-auto">
          <div className="fixed inset-0 backdrop-brightness-50 bg-opacity-75 transition-opacity"></div>
          <div className="flex items-end w-screen justify-center h-screen xl:p-14 xl:px-56  2xl:p-14 2xl:px-56 text-center sm:block p-8 py-14">
            <div className="flex flex-col h-full w-full bg-white rounded-lg shadow-xl transform transition-all ">
              <div className="top-0 bg-red-400 w-full h-40"></div>
              <div className="w-full h-full flex flex-col justify-center items-center">
                <div className="flex mt-2 items-center w-full justify-center">
                  <div
                    style={{
                      background: `url(${"/profile.jpeg"})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "100% 100%",
                    }}
                    className="border-4 border-gray-900 w-32 h-32 rounded-full"
                  ></div>
                </div>
                <div className="w-full flex flex-col items-center">
                  <div className="mt-2 font-semibold text-2xl">
                    Krishna Mahato
                  </div>
                  <div className="text-xs font-light">
                    1st Year, 2041013021, Section-2041005
                  </div>
                  <div className=" px-2 py-1 mt-4 hover:text-pink-900 hover:cursor-pointer rounded-3xl text-blue-900 font-medium border border-gray-400 text-sm">
                    🎓 Computer Science Engineering
                  </div>
                  <div className="mt-4 flex items-center max-w-md px-6 justify-center text-center font-light text-gray-500 text-sm">
                    Hey there everyone! Nice to meet you beautiful people. Do
                    check my social links below.
                  </div>
                  <div className="flex mt-4 w-full justify-between max-w-sm px-4">
                    <img
                      className="hover:bg-gray-300 hover:cursor-pointer w-10 border border-gray-300 rounded-full p-1"
                      src="/fb.png"
                    />
                    <img
                      className="hover:bg-gray-300 hover:cursor-pointer w-10 border border-gray-300 rounded-full p-1"
                      src="/insta.png"
                    />
                    <img
                      className="hover:bg-gray-300 hover:cursor-pointer w-10 border border-gray-300 rounded-full p-1"
                      src="/linkedin.png"
                    />
                    <img
                      className="hover:bg-gray-300 hover:cursor-pointer w-10 border border-gray-300 rounded-full p-1"
                      src="/twitter.png"
                    />
                    <img
                      className="hover:bg-gray-300 hover:cursor-pointer w-10 border border-gray-300 rounded-full p-1"
                      src="/github.png"
                    />
                  </div>
                  <div className="flex py-10 px-6 items-center justify-around  w-full h-40">
                    <div className="hover:cursor-pointer hover:bg-gray-100 text-xs flex flex-col justify-center items-center h-full w-1/3 rounded-2xl border">
                      <img className="w-10 h-10" src="/icons8-send-100.png" />
                      Message
                    </div>
                    <div className="hover:cursor-pointer hover:bg-gray-100 text-xs pt-1 flex flex-col mx-6 justify-center items-center h-full rounded-2xl border w-1/3">
                      <img
                        className="w-10 mb-2 h-10"
                        src="/icons8-send-hot-list-100.png"
                      />
                      Add Friend
                    </div>
                    <div className="hover:cursor-pointer hover:bg-gray-100 text-xs pt-1 flex flex-col justify-center items-center h-full w-1/3 rounded-2xl border">
                      <img
                        className="w-10 mb-1 h-10"
                        src="/icons8-view-90.png"
                      />
                      See Posts
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ClassmateProfileModal;
