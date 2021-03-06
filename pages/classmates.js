import Layout from "../components/layout";
import ClassmateProfile from "../components/classmate";
import demoapi from "../demoApi.json";
import { useSelector } from "react-redux";

export default function Classmate() {
  let globalState = useSelector((state) => state);
  return (
    <Layout classname="fixed w-screen h-screen">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <input
          className="bg-white w-2/3 m-1 mb-4 mt-6 h-12 rounded-full text-sm font-light outline-none px-4"
          placeholder="Search for classmates..."
        />
        <div className="flex overflow-y-auto flex-wrap p-2 w-5/6 pb-28 h-full">
          {globalState.classmates.map((item, i) => {
            return <ClassmateProfile key={i} classmate={item} />;
          })}
        </div>
      </div>
    </Layout>
  );
}
