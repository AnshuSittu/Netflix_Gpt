import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMOvieTrailer = (movieId) => {
  // disptch for trailer video
  const dispatch = useDispatch();

  //fetch trailer video and updating the store with trailer video data
  const getMoviesVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
   // console.log(json);

    const filterData = json.results.filter((video) => video.type === "Trailer");
    // if Filter data length exist i.e not zero then take filterData other wise take any 1 st viedo
    const trailer = filterData.length ? filterData[1] : json.results[0];

   // console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMoviesVideos();
  }, []);
};

export default useMOvieTrailer;
