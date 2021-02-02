import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { State } from "./types";

export const initialState: State = {};

const _module_Slice = createSlice({
  name: "_module_",
  initialState,
  reducers: {
    sample: (state, action: PayloadAction<{}>) => {
      // stateを更新する処理を書く
      console.log("sampleコードは削除してください。");
    },
  },
});

export const { actions } = _module_Slice;

export default _module_Slice.reducer;
