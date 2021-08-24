import axios from "axios";
import { useEffect, useState } from "react";

const Comment = ({ comment }) => {
  const [cname, setCname] = useState("");
  useEffect(() => {
    axios
      .post(`${process.env.BACKEND_URL}/api/v1/student/getStudent`, {
        studentID: comment.commentedBy,
      })
      .then((res) => {
        if (res) {
          setCname(res.data.student.name);
        } else {
          console.log("There is some error!");
        }
      });
  }, []);
  return (
    <div className="flex text-center w-full m-3 ml-1 mt-0">
      <div className="w-8 h-8 bg-black rounded-full "></div>
      <div className="flex flex-col flex-wrap bg-gray-300 items-center rounded-xl h-auto text-xs font-light px-2 mx-2">
        <div
          style={{
            fontSize: "9px",
          }}
          className="w-full h-1/3 font-semibold flex"
        >
          {cname}
        </div>
        <div className="h-2/3 w-full flex">{comment.comment}</div>
      </div>
    </div>
  );
};

export default Comment;
