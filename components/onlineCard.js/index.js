import { useState } from "react";

const OnlineCard = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => {
          open ? setOpen(false) : setOpen(true);
        }}
        className="flex hover:cursor-pointer hover:bg-gray-100 rounded-lg p-1 w-full my-2"
      >
        <div className="flex items-center justify-center w-1/6 h-10">
          <div className="w-10 h-10 bg-gray-600 rounded-full"></div>
        </div>
        <div className="w-2/3 h-10 text-sm font-light flex items-center px-4">
          Krishna Mahato
        </div>
        <div className="flex justify-center items-center w-1/6 h-10">
          <div className="w-2.5 h-2.5 bg-green-600 rounded-full"></div>
        </div>
      </div>
      {open ? (
        <div className="bg-gray-100 border bottom-0 right-60 fixed w-80 h-1/2 rounded-lg">
          <div
            onClick={() => {
              setOpen(false);
            }}
            className="bg-white flex hover:cursor-pointer w-full h-10"
          >
            <div className="flex items-center justify-center w-1/6 h-full">
              <img
                style={{
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                className="border border-gray-900 h-8 w-8 rounded-full"
                src="/profile.jpeg"
              />
            </div>
            <div className="text-xs flex items-center font-light px-2">
              Krishna Mahato
            </div>
          </div>
          <hr className="bg-black" />
          <div className="flex flex-col w-full h-full">
            <div className="w-full h-full p-1"></div>
            <div className="flex px-2 w-full h-10 mb-11">
              <input
                className="bg-white w-5/6 rounded-full outline-none text-sm shadow-md font-light h-10 px-2"
                placeholder="Write a message..."
              />
              <button className="flex-grow ml-2 bg-gray-900 text-white rounded-full">
                ►
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default OnlineCard;
