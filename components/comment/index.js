const Comment = ({ comment, by }) => {
  return (
    <div className="flex text-center w-full m-3 ml-1 mt-0">
      <div className="w-8 h-8 bg-black rounded-full "></div>
      <div className="flex flex-wrap bg-gray-300 items-center rounded-xl h-auto p-1 text-xs font-light px-2 mx-2">
        {comment.comment}
      </div>
    </div>
  );
};

export default Comment;
