import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    //puting contidon so that it will render if movie have data
    movies.nowPlayingMovies && (
      <div className=" bg-black">
        <div className="-mt-52 pl-5 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Populer Movies"} movies={movies.popularMovies} />
          <MovieList title={"Trending Movies"} movies={movies.trendingMovies} />
          <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
          <MovieList
            title={"Top Rated Movies"}
            movies={movies.topRatedMovies}
          />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;

/* 
-Movie List - Popular
-Movie List - Now Playing
-Movie List - Tranding
-Movie List - Horrer


*/
