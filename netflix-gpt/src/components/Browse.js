import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  // here we have created cutsome hook and exported here to use it
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
      {/* 
          MainCOnatiner 
           -VideoBackground
           -VideoTItle  
         SecondayContainer
            -MovieList *N rows 
            -Cards *N lots of Cards
       */}
    </div>
  );
};

export default Browse;
