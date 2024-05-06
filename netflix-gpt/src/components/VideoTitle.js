import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-24 w-screen aspect-video absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/2">{overview}</p>
      <div>
        <button className="bg-white rounded-lg bg text-xl text-black p-4 px-12 hover:bg-opacity-80">  
          Play
        </button>
        <button className="bg-gray-500 rounded-lg bg text-xl text-white p-4 px-12 mx-2 hover:bg-opacity-50">
          Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
