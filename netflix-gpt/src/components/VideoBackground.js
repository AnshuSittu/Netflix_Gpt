import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const VideoBackground = (movieId) => {

  const trailerVideo = useSelector(store => store.movies?.trailerVideo);
  // disptch for trailer video
   const dispatch = useDispatch ()

  //fetch trailer video
  const getMoviesVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/823464/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);

    const filterData = json.results.filter((video) => video.type === "Trailer");
    // if Filter data length exist i.e not zero then take filterData other wise take any 1 st viedo
    const trailer = filterData.length ? filterData[1] : json.results[0];

    console.log(trailer);
    dispatch(addTrailerVideo(trailer));

  };

  useEffect(() => {
    getMoviesVideos();
  }, []);

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/"+ trailerVideo?.key} 
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
