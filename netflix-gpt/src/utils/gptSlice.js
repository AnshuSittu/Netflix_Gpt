import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMoviesResults: null,
    movieNames: null,

  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch; // if the value of showGPT search is true show it & not if it ! that means false if it will be flase it will become true
    },
    addGptMovieResult: (state, action) => {
      const {movieNames, movieResults} = action.payload;
       state.movieNames = movieNames;
       state.movieResults = movieResults;
    },
  },
});

export const { toggleGptSearchView, addGptMovieResult } = gptSlice.actions
export default gptSlice.reducer