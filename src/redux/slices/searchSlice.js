import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: null,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    search: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export const { search } = searchSlice.actions;

export default searchSlice.reducer;
