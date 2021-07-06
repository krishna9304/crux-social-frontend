import { useState } from "react";

const ClassmateProfile = () => {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState({
    x: "",
    y: "",
  });

  return (
    <>
      <div className="2xl:w-1/4 xl:w-1/4 lg:w-1/3 p-2 md:w-1/2 sm:w-1/2 w-full  h-56">
        <div
          onMouseMove={(e) => {
            console.log(e.clientX, e.clientY);
            setPos({
              x: e.clientX,
              y: e.clientY,
            });
          }}
          onMouseEnter={() => {
            setOpen(true);
          }}
          onMouseLeave={() => {
            setOpen(false);
          }}
          className="flex justify-center items-center bg-gray-500 w-full rounded-md h-full p-0"
        >
          <div className="h-24 w-24 shadow-lg rounded-full bg-white"></div>
        </div>
      </div>
      {open ? (
        <div
          style={{
            top: pos.y + 20 + "px",
            left: pos.x + 20 + "px",
          }}
          class="fixed"
        >
          <div class="max-w-sm rounded shadow-lg bg-white">
            <div class="relative flex justify-center">
              <div class="bg-white absolute w-3 h-3 transform rotate-45 -mt-1"></div>
            </div>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div class="px-6 py-4">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                #photography
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                #travel
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                #winter
              </span>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ClassmateProfile;
