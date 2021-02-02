import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { State } from "./types";

export const initialState: State = {};

const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {
    sample: (state, action: PayloadAction<{}>) => {
      // stateを更新する処理を書く
      console.log("sampleコードは削除してください。");
    },
  },
});

export const { actions } = memberSlice;

export default memberSlice.reducer;
