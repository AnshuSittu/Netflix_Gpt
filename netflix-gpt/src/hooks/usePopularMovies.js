import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();


//memoization  for API call
  const popularMovies = useSelector((store) => store.movies.popularMovies);

  // API call for Movies
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);

    //Disptaching an action

    dispatch(addPopularMovies(json.results));
  };
  /* this blow code is work if popularMovies Does not have data so it wont call API again and agin if alreday have data then */
  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;
