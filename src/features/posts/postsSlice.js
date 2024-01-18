import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = {
  posts: [
    {
      id: nanoid(),
      title: "First Post!",
      content: "Hello",
      user: "z4ihTRersbs9nyefU1AAe",
      date: sub(new Date(), { minutes: 10 }).toISOString(),
    },
    {
      id: nanoid(),
      title: "Second Post!",
      content: "More text",
      user: "NFler5sftrzsSTwpo7454",
      date: sub(new Date(), { minutes: 5 }).toISOString(),
    },
  ],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.posts.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
    postAdded: {
      reducer(state, action) {
        state.posts.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            date: new Date().toISOString(),
            title,
            content,
            user: userId,
          },
        };
      },
    },
    postUpdated: (state, action) => {
      const { id, title, content } = action.payload;
      const existingPost = state.posts.find((post) => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    },
    onDeletePost: (state, action) => {
      return {
        ...state,
        posts: state.posts.filter((item) => item.id !== action.payload),
      };
    },
  },
});

export const { postAdded, postUpdated, onDeletePost, reactionAdded } =
  postsSlice.actions;

export const selectAllPosts = (state) => state.posts.posts;
export const selectPostById = (state, postId) =>
  state.posts.posts.find((post) => post.id === postId);

export default postsSlice.reducer;
