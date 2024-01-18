import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = [
  { id: "z4ihTRersbs9nyefU1AAe", name: "Tianna Jenkis" },
  { id: "NFler5sftrzsSTwpo7454", name: "Donald" },
];

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default usersSlice.reducer;
