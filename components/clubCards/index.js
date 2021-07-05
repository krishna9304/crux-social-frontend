const ClubCards = () => {
  return (
    <div>
      <div className="hover:cursor-pointer wrapper mb-10 mx-3 antialiased text-gray-900">
        <div>
          <img
            src="https://source.unsplash.com/random/350x350"
            alt=" random imgee"
            className="w-full object-cover object-center rounded-lg shadow-md"
          />

          <div className="relative px-4 -mt-16  ">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-baseline">
                <span className="bg-gray-900 text-white text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                  Club
                </span>
                <div
                  style={{
                    fontSize: "0.6rem",
                  }}
                  className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider"
                >
                  129 Members &bull; 12 coordinators
                </div>
              </div>

              <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                Sports Club
              </h4>
              <div className="">
                <span className="text-green-400 text-xs">
                  Click to see the complete profile!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubCards;
