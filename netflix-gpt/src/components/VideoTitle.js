import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-6 md:px-24 w-screen aspect-video absolute text-white bg-gradient-to-r from-black">
      <h1 className=" text-2xl md:text-3xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/2">{overview}</p>
      <div className="my-4 md:m-0">
        <button className="bg-white rounded-lg bg mt-5 md:m-0 text-xl text-black py-1 md:py-4 px-3 md:px-12 hover:bg-opacity-80">  
          Play
        </button>
        <button className="hidden md:inline-block bg-gray-500 rounded-lg bg text-xl text-white p-4 px-12 mx-2 hover:bg-opacity-50">
          Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
