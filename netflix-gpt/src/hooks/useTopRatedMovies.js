import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
     
 
  const dispatch = useDispatch();
  // API call for Movies
  const getTopRated = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();
   // console.log(json.results);

    //Disptaching an action

    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    getTopRated();
  }, []);
}

export default useTopRatedMovies;