import { createSlice, current } from "@reduxjs/toolkit";
import { postList } from "../data/postList";

export const photoSlice = createSlice({
  name: "photoPosts",
  initialState: { posts: postList },
  reducers: {
    createPost: (state, action) => {
      console.log("Create post");
      state.posts.push(action.payload);
      console.log(current(state.posts));
    },
    deletePost: (state, action) => {
      console.log("Delete post");
      const postToRemove = state.posts.findIndex((p) => {
        return p.id === action.payload.id;
      });
      state.posts.splice(postToRemove, 1);
      console.log(current(state.posts)); //Need to use current to log state.posts
    },
  },
});

export const { createPost, deletePost } = photoSlice.actions;

export default photoSlice.reducer;
