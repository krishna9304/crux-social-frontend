import { useState } from "react";

const Post = () => {
  const [dimensions, setDimensions] = useState({
    height: "",
    width: "",
  });
  return (
    <div className="bg-gray-100 mb-8 w-auto rounded-lg h-auto">
      <div className="flex bg-white rounded-t-lg px-2 w-full h-10">
        <div className="flex items-center justify-center w-1/12 h-full">
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
        <div className="flex flex-col px-2 ">
          <div className="text-sm flex font-light">Krishna Mahato</div>
          <div
            style={{
              fontSize: "10px",
            }}
            className="flex font-extralight text-gray-500"
          >
            Posted 2 min ago
          </div>
        </div>
      </div>
      <hr className="bg-black" />
      <div>
        <img
          onLoad={({ target: img }) => {
            console.log(img);
            setDimensions({
              height: img.naturalHeight,
              width: img.naturalWidth,
            });
          }}
          style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            height: dimensions.height / 6,
            width: dimensions.width / 6,
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          src="/Screenshot 2021-06-28 at 11.41.23 PM.png"
        />
      </div>
      <hr className="bg-black" />
      <div className="flex flex-col h-auto rounded-b-lg w-full bg-white">
        <div className="text-xs p-2 bg-gray-100">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
        <div className="flex h-10 bg-white w-full">
          <div className="w-1/3 h-10 flex hover:cursor-pointer hover:bg-gray-100 justify-center items-center text-sm font-light">
            👍🏼 Like
          </div>
          <div className="w-1/3 h-10 flex hover:cursor-pointer hover:bg-gray-100 justify-center items-center text-sm font-light">
            💬 Comment
          </div>
          <div className="w-1/3 h-10 flex hover:cursor-pointer hover:bg-gray-100 justify-center items-center text-sm font-light">
            ⇪ Share
          </div>
          <hr className="bg-black" />
        </div>
        <div className="bg-gray-100 rounded-b-lg p-2 w-full h-auto">
          <input
            className="h-10 px-4 rounded-full w-full text-sm font-light outline-none"
            placeholder="Write a comment..."
          />
        </div>
      </div>
    </div>
  );
};

export default Post;
