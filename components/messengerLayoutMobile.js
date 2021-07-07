import Head from "next/head";
import NavBar from "../components/navbar";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

let MessengerLayoutMobile = ({ children, classname = "" }) => {
  let router = useRouter();
  let globalState = useSelector((state) => state);
  return (
    <div
      className={
        "bg-gray-200 flex flex-col justify-start min-h-screen " + classname
      }
    >
      <Head>
        <title>Hey {globalState.user.name}!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div className="flex h-10">
        <div
          onClick={() => {
            router.push("/inbox");
          }}
          className="w-1/2 h-10"
        >
          <div className="hover:cursor-pointer flex bg-white flex-col justify-end w-full h-full">
            <div className="font-light text-sm w-full h-full flex justify-center items-center">
              Inbox
            </div>
            {router.pathname === "/inbox" ? (
              <div className="h-1.5 bg-gray-900 rounded-t-md"></div>
            ) : null}
          </div>
        </div>

        <div
          onClick={() => {
            router.push("/online-members");
          }}
          className="w-1/2 h-10"
        >
          <div className="hover:cursor-pointer flex bg-white flex-col justify-end w-full h-full">
            <div className="font-light text-sm w-full h-full flex justify-center items-center">
              Online
            </div>
            {router.pathname === "/online-members" ? (
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

export default MessengerLayoutMobile;
