import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch; // if the value of showGPT search is true show it & not if it ! that means false if it will be flase it will become true
    },
  },
});

export const { toggleGptSearchView } = gptSlice.actions
export default gptSlice.reducer