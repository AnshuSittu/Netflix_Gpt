import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  //Fetach data from TB API and update store all thise movie
  //this peace of code is feathing the data and put into store
  const dispatch = useDispatch();

  //memoization  for API call
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  // API call for Movies
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);

    //Disptaching an action

    dispatch(addNowPlayingMovies(json.results));
  };

  /* this blow code is work if nowPlayingMovies Does not have data so it wont call API again and agin if alreday have data then */
  useEffect(() => {
    if (!nowPlayingMovies) getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
