import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./slices/searchSlice";
import sectionsReducer from "./slices/sectionsSlice";

export const store = configureStore({
  reducer: {
    sections: sectionsReducer,
    search: searchReducer,
  },
});
