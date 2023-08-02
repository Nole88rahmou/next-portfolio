import { configureStore } from "@reduxjs/toolkit";
import reviewReducer from "./feature/review";

export const store = configureStore({
  reducer: {
    review: reviewReducer,
  },
});

export default store;
