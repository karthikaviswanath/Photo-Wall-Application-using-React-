import { createSlice, current } from "@reduxjs/toolkit";

export const commentsSlice = createSlice({
  name: "comments",
  initialState: { postComments: ([] = []) },
  reducers: {
    addComments: (state, action) => {
      console.log("Add comments");
      console.log(action.payload);
      state.postComments.push(action.payload);
      console.log(current(state.postComments));
    },
  },
});
export const { addComments } = commentsSlice.actions;

export default commentsSlice.reducer;
