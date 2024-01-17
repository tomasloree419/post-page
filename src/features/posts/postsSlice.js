import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = [
  { id: nanoid(), title: 'First Post!', content: 'Hello' },
  { id: nanoid(), title: 'Second Post!', content: 'More text' }
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {

  }
})

export default postsSlice.reducer