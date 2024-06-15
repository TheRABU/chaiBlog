import { configureStore } from "@reduxjs/toolkit";

import authSlide from "./authSlice";
import postSlice from "./postSlice";

const store = configureStore({
  reducer: {
    auth: authSlide,
    post: postSlice,
    //TODO: add more slice for post
  },
});

export default store;
