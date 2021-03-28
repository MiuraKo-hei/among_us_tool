import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RANGE } from "../../constant";
import { MemberId } from "../member";

import { State } from "./types";

export const initialState: State = {
  events: Array(RANGE).fill({
    targetMemberId: undefined,
  }),
  resetCounter: 0,
};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    updateMemberId: (
      state,
      action: PayloadAction<{ eventIndex: number; memberId: MemberId }>
    ) => {
      const { eventIndex, memberId } = action.payload;
      state.events[eventIndex].targetMemberId = memberId;
    },
    reset: (state) => {
      state.events = Array(RANGE).fill({
        targetMemberId: undefined,
        type: undefined,
      });
      state.resetCounter = state.resetCounter + 1;
    },
  },
});

export const { actions } = eventSlice;

export default eventSlice.reducer;
