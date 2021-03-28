import { createSlice } from "@reduxjs/toolkit";

import { State } from "./types";

export const initialState: State = {
  open: false,
};

const usageSlice = createSlice({
  name: "usage",
  initialState,
  reducers: {
    open: (state) => {
      state.open = true;
    },
    close: (state) => {
      state.open = false;
    },
  },
});

export const { actions } = usageSlice;

export default usageSlice.reducer;
