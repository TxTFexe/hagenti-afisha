import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 1,
  name: "Кино",
};

export const sectionsSlice = createSlice({
  name: "sections",
  initialState,
  reducers: {
    setSection: (state, action) => {
      state.id = action.payload;
      state.name = action.payload;
      console.log(state.id);
    },
  },
});

export const { setSection } = sectionsSlice.actions;

export default sectionsSlice.reducer;
