import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  mode: "dark", 
  //userId: "65c9c8d379bc847774d86aad"
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light"; // functions to change the global state
    },
  },
});

export const { setMode } = globalSlice.actions;
export default globalSlice.reducer;
