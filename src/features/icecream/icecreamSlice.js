import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfIcecreams: 30,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIcecreams--;
    },
    restoreIcecream: (state) => {
      state.numOfIcecreams++;
    },
  },
});

export default icecreamSlice.reducer
export const {ordered,restoreIcecream} = icecreamSlice.actions