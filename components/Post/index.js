import axios from "axios";
import { useEffect, useState } from "react";
import Comment from "../comment";

const Post = ({ item }) => {
  const [isCommenting, setIsCommenting] = useState(false);
  const [comments, setComments] = useState(item.comment);
  const [comment, setComment] = useState("");
  const [lastComments, setLastComments] = useState([]);
  const [ago, setAgo] = useState("");
  const [postedBy, setPostedBy] = useState({
    profilePic: "",
    name: "",
  });
  function timeDifference(previous, current = Number(Date.now())) {
    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    var elapsed = current - previous;

    if (elapsed < msPerMinute) {
      return Math.round(elapsed / 1000) + " seconds ago";
    } else if (elapsed < msPerHour) {
      return Math.round(elapsed / msPerMinute) + " minutes ago";
    } else if (elapsed < msPerDay) {
      return Math.round(elapsed / msPerHour) + " hours ago";
    } else if (elapsed < msPerMonth) {
      return "approximately " + Math.round(elapsed / msPerDay) + " days ago";
    } else if (elapsed < msPerYear) {
      return (
        "approximately " + Math.round(elapsed / msPerMonth) + " months ago"
      );
    } else {
      return "approximately " + Math.round(elapsed / msPerYear) + " years ago";
    }
  }
  setInterval(() => {
    setAgo(timeDifference(Number(item.timestamp), Number(Date.now())));
  }, 30000);

  useEffect(() => {
    setAgo(timeDifference(Number(item.timestamp), Number(Date.now())));
  }, []);

  useEffect(() => {
    axios
      .post(`${process.env.BACKEND_URL}/api/v1/student/getStudent`, {
        studentID: item.postedBy,
      })
      .then((res) => {
        if (res.data.res) {
          setPostedBy({
            profilePic: res.data.student.profilepPic,
            name: res.data.student.name,
          });
        }
      });
    if (comments.length > 4) {
      setLastComments(comments.slice(-4, comments.length));
    } else {
      setLastComments(comments);
    }
  }, [comments]);

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
            src={postedBy.profilePic}
          />
        </div>
        <div className="flex flex-col px-2 ">
          <div className="text-sm flex font-light">{postedBy.name}</div>
          <div
            style={{
              fontSize: "10px",
            }}
            className="flex font-extralight text-gray-500"
          >
            {ago}
          </div>
        </div>
      </div>
      <hr className="bg-black" />
      <div>
        {item.picture !== "null" ? (
          <img
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            src={item.picture}
          />
        ) : null}
      </div>
      <hr className="bg-black" />
      <div className="flex flex-col h-auto rounded-b-lg w-full bg-white">
        <div className="text-xs p-2 bg-gray-100">{item.caption}</div>
        <div className="flex h-10 bg-white w-full">
          <div className="w-1/3 h-10 flex hover:cursor-pointer hover:bg-gray-100 justify-center items-center text-sm font-light">
            👍🏼 Like
          </div>
          <div
            onClick={() => {
              setIsCommenting(!isCommenting);
            }}
            className="w-1/3 h-10 flex hover:cursor-pointer hover:bg-gray-100 justify-center items-center text-sm font-light"
          >
            💬 Comment
          </div>
          <div className="w-1/3 h-10 flex hover:cursor-pointer hover:bg-gray-100 justify-center items-center text-sm font-light">
            ⇪ Share
          </div>
          <hr className="bg-black" />
        </div>
        <div
          className={`bg-gray-100 rounded-b-lg p-2 w-full h-auto ${
            isCommenting ? "" : "hidden"
          }`}
        >
          <div className="w-full p-2 bg-gray-100">
            {comments.length > 4 && lastComments.length === comments.length ? (
              <div
                onClick={() => {
                  setLastComments(comments.slice(-4, comments.length));
                }}
                className="px-2 pb-4 hover:cursor-pointer hover:underline font-semibold text-xs text-gray-500"
              >
                Show Less
              </div>
            ) : null}
            {comments.length > lastComments.length ? (
              <div
                onClick={() => {
                  setLastComments(comments);
                }}
                className="px-2 pb-4 hover:cursor-pointer hover:underline font-semibold text-xs text-gray-500"
              >
                View more comments{" "}
              </div>
            ) : null}
            {lastComments.map((item, key) => {
              return <Comment comment={item} key={key} />;
            })}
          </div>
          <input
            onChange={(e) => {
              setComment(e.target.value);
            }}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                setComments((data) => [...data, comment]);
                setComment("");
              }
            }}
            value={comment}
            className="h-10 px-4 rounded-full w-full text-sm font-light outline-none"
            placeholder="Write a comment..."
          />
        </div>
      </div>
    </div>
  );
};

export default Post;
