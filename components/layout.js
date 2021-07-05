import Head from "next/head";
import NavBar from "../components/navbar";
import { useRouter } from "next/router";

let Layout = ({ children, classname = "" }) => {
  let router = useRouter();

  return (
    <div
      className={
        "bg-gray-200 flex flex-col justify-start min-h-screen " + classname
      }
    >
      <Head>
        <title>Hey Krishna!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div className="flex h-10">
        <div
          onClick={() => {
            router.push("/classmates");
          }}
          className="w-1/3 h-10"
        >
          <div className="hover:cursor-pointer flex bg-white flex-col justify-end w-full h-full">
            <div className="font-light text-sm w-full h-full flex justify-center items-center">
              Classmates
            </div>
            {router.pathname === "/classmates" ? (
              <div className="h-1.5 bg-gray-900 rounded-t-md"></div>
            ) : null}
          </div>
        </div>
        <div
          onClick={() => {
            router.push("/");
          }}
          className="w-1/3 h-10"
        >
          <div className="hover:cursor-pointer flex bg-white flex-col justify-end w-full h-full">
            <div className="font-light text-sm w-full h-full flex justify-center items-center">
              Home
            </div>
            {router.pathname === "/" ? (
              <div className="h-1.5 bg-gray-900 rounded-t-md"></div>
            ) : null}
          </div>
        </div>
        <div
          onClick={() => {
            router.push("/clubs");
          }}
          className="w-1/3 h-10"
        >
          <div className="hover:cursor-pointer flex bg-white flex-col justify-end w-full h-full">
            <div className="font-light text-sm w-full h-full flex justify-center items-center">
              Clubs
            </div>
            {router.pathname === "/clubs" ? (
              <div className="h-1.5 bg-gray-900 rounded-t-md"></div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="w-full h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default Layout;
