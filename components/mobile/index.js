import Post from "../Post";
import CreateAPost from "../desktop/createAPost";
const MobileLayout = () => {
  return (
    <div className="py-4 flex flex-col items-center justify-center h-full w-screen overflow-y-auto">
      <div className="w-full h-full flex items-center justify-center">
        <div className="p-4 flex flex-col justify-center items-center w-full max-w-sm h-full">
          <div className="w-60 h-60 rounded-full shadow-md bg-white"></div>
          <div className="mt-2 font-semibold text-2xl">Krishna Mahato</div>
          <div className="text-xs font-light">
            1st Year, 2041013021, Section-2041005
          </div>
          <div className="px-2 py-1 mt-4 hover:text-pink-900 hover:cursor-pointer rounded-3xl text-blue-900 font-medium border border-gray-400 text-sm">
            🎓 Computer Science Engineering
          </div>
          <div className="mt-4 flex items-center justify-center text-center font-light text-gray-500 text-sm">
            Hey there everyone! Nice to meet you beautiful people. Do check my
            social links below.
          </div>
          <div className="flex mt-4 w-full justify-between px-4">
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
        </div>
      </div>
      <div className="w-full mt-2 h-auto px-4 flex flex-col">
        <hr className="bg-black w-full my-4 border-t border-gray-300 " />
        <CreateAPost />
        <hr className="bg-black w-full my-4 mb-2 border-t border-gray-300 " />
        <div className="font-light text-center mb-2">Latest Posts</div>
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default MobileLayout;
