import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/2">{overview}</p>
      <div>
        <button className="bg-gray-500 bg-opacity-40 rounded-lg bg text-xl text-white p-4 px-12 ">
          Play
        </button>
        <button className="bg-gray-500 bg-opacity-40 rounded-lg bg text-xl text-white p-4 px-12 mx-2 ">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
