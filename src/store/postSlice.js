import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [{ id: 1, text: "" }],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: (state, action) => {
      const post = {
        id: Date.now(),
        text: action.payload.text,
      };
      state.posts.push(post);
    },
    removePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
    // userPost: (state, action) => {},
    // allPost: (state, action) => {},
  },
});
const { addPost, removePost } = postSlice.actions;
export default postSlice.reducer;
