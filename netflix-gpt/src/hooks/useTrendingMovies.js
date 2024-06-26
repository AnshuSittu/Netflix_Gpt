import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrendingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTrendingMovies = () => {
     
 
  const dispatch = useDispatch();
  // API call for Movies
  const getTrendingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    //console.log(json.results);

    //Disptaching an action

    dispatch(addTrendingMovies(json.results));
  };

  useEffect(() => {
    getTrendingMovies();
  }, []);
}

export default useTrendingMovies;