import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = [
  { id: nanoid(), title: "First Post!", content: "Hello" },
  { id: nanoid(), title: "Second Post!", content: "More text" },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          },
        };
      },
    },
    postUpdated: (state, action) => {
      const { id, title, content } = action.payload;
      const existingPost = state.find((post) => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    },
    onDeletePost: (state, action) => {
      return [...state.filter((item) => item.id !== action.payload)];
    },
  },
});

export const { postAdded, postUpdated, onDeletePost } = postsSlice.actions;

export default postsSlice.reducer;
