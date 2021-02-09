import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { uniqueId, keyBy } from "lodash-es";
import { ColorName, colors, RANGE } from "../../constant";
import { eventActions } from "../event";

import { State, MemberId, Member } from "./types";

const initialMembers: Member[] = [
  {
    memberId: uniqueId(),
    color: colors.Red,
    name: "Red",
    isDead: false,
    alibis: Array(RANGE).fill(false),
  },
  {
    memberId: uniqueId(),
    color: colors.Blue,
    name: "Blue",
    isDead: false,
    alibis: Array(RANGE).fill(false),
  },
  {
    memberId: uniqueId(),
    color: colors.Green,
    name: "Green",
    isDead: false,
    alibis: Array(RANGE).fill(false),
  },
  {
    memberId: uniqueId(),
    color: colors.Yellow,
    name: "Yellow",
    isDead: false,
    alibis: Array(RANGE).fill(false),
  },
  {
    memberId: uniqueId(),
    color: colors.Orange,
    name: "Orange",
    isDead: false,
    alibis: Array(RANGE).fill(false),
  },
];
export const initialState: State = {
  members: keyBy(initialMembers, "memberId"),
  displayList: initialMembers.map((m) => m.memberId),
};

const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {
    setAlibi: (
      state,
      action: PayloadAction<{
        memberId: MemberId;
        eventIndex: number;
        alibi: boolean;
      }>
    ) => {
      const { memberId, alibi, eventIndex } = action.payload;
      const target = state.members[memberId];
      if (target) {
        target.alibis[eventIndex] = alibi;
        state.members[memberId] = target;
      }
    },
    updateName: (
      state,
      action: PayloadAction<{ memberId: MemberId; name: string }>
    ) => {
      const { memberId, name } = action.payload;
      const target = state.members[memberId];
      if (target) {
        target.name = name;
        state.members[memberId] = target;
      }
    },
    updateColor: (
      state,
      action: PayloadAction<{ memberId: MemberId; colorName: ColorName }>
    ) => {
      const { memberId, colorName } = action.payload;
      const target = state.members[memberId];
      if (target) {
        target.color = colors[colorName];
        state.members[memberId] = target;
      }
    },
    addMember: (state) => {
      const emptyMember: Member = {
        memberId: uniqueId(),
        color: colors.White,
        name: "",
        isDead: false,
        alibis: Array(RANGE).fill(false),
      };
      state.members[emptyMember.memberId] = emptyMember;
      state.displayList.push(emptyMember.memberId);
    },
    removeMember: (state, action: PayloadAction<{ memberId: MemberId }>) => {
      const { memberId } = action.payload;
      state.members[memberId] = undefined;
      state.displayList = state.displayList.filter((id) => id !== memberId);
    },
    importMembers: (state, action: PayloadAction<{ members: Member[] }>) => {
      const { members } = action.payload;
      state.members = keyBy(members, "memberId");
      state.displayList = members.map((m) => m.memberId);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(eventActions.reset, (state) => {
      state.displayList.forEach((memberId) => {
        const target = state.members[memberId];
        if (target) {
          target.alibis = Array(RANGE).fill(false);
          state.members[memberId] = target;
        }
      });
    });
  },
});

export const { actions } = memberSlice;

export default memberSlice.reducer;
