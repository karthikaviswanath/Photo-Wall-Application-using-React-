import { createSlice, current } from "@reduxjs/toolkit";

const postList = [
  {
    id: 0,
    description: "Pansy flower",
    imageLink:
      "https://th.bing.com/th/id/R.d66779d98fc67121b0658a4ff1fcfb2f?rik=9%2fFE6I3ccA2PzQ&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2f7%2f76%2fViola_tricolor_pansy_flower_close_up.jpg&ehk=ZeB3QvCBEnH8f2Z4HyFFlxfHHNS1uryzpehWmgBWHmw%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    id: 1,
    description: "Bulguksa Lake scenery",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/8/8b/Bulguksa_Lake_scenery.jpg",
  },
  {
    id: 2,
    description: "Rainbow Lorikeets",
    imageLink:
      "https://live.staticflickr.com/65535/49808893567_64d0c54217_b.jpg",
  },
];

export const photoSlice = createSlice({
  name: "photoPosts",
  initialState: { value: postList },
  reducers: {
    createPost: (state, action) => {
      console.log("Create post");
      state.value.push(action.payload);
      console.log(current(state.value));
    },
    deletePost: (state, action) => {
      console.log("Delete post");
      const postToRemove = state.value.findIndex((p) => {
        return p.id === action.payload.id;
      });
      state.value.splice(postToRemove, 1);
      console.log(current(state.value)); //Need to use current to log state.value
    },
  },
});

export const { createPost, deletePost } = photoSlice.actions;

export default photoSlice.reducer;
