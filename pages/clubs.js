import React from "react";
import Layout from "../components/layout";
import ClubCards from "../components/clubCards";
import demoapi from "../demoApi.json";

const Clubs = () => {
  return (
    <Layout classname="fixed w-screen h-screen">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <input
          className="bg-white w-2/3 m-1 mb-4 mt-6 h-12 rounded-full text-sm font-light outline-none px-4"
          placeholder="Search for clubs..."
        />
        <div className="flex overflow-y-auto flex-wrap p-2 w-5/6 pb-28 h-full justify-center items-center">
          {demoapi.map((item, key) => {
            return <ClubCards key={key} />;
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Clubs;
