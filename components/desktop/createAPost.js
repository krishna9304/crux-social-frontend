const CreateAPost = () => {
  return (
    <div
      style={{
        minHeight: "7rem",
      }}
      className="flex bg-white w-full p-2 px-2 rounded-md shadow-sm"
    >
      <div className="w-1/12">
        <div className="w-10 lg:w-8 lg:h-8 rounded-full h-10 bg-gray-700"></div>
      </div>
      <div className="w-11/12 pl-4 xl:px-0 lg:px-0 md:px-0">
        <textarea
          style={{
            minHeight: "3.5rem",
          }}
          className="text-gray-700 bg-gray-200 rounded-3xl outline-none px-4 py-1 text-xs w-full"
          placeholder="Create a post..."
        />
        <div className="flex justify-between pt-2 h-10 w-full">
          <div
            style={{
              minWidth: "8rem",
            }}
            className="hover:cursor-pointer hover:text-gray-800 text-gray-500 hover:bg-gray-100 w-1/4 text-xs font-medium flex justify-center items-center border border-gray-200 rounded-md"
          >
            🏞 Image / 🎬 Video
          </div>
          <div className="hover:cursor-pointer hover:bg-gray-800 active:bg-black bg-gray-900 text-white w-1/6 text-sm font-medium flex justify-center items-center border border-gray-200 rounded-md">
            Post
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAPost;
