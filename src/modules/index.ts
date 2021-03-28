import { combineReducers } from "@reduxjs/toolkit";
import member from "./member";
import event from "./event";
import usage from "./usage";

export const rootReducer = combineReducers({
  member,
  event,
  usage,
});

export type RootState = ReturnType<typeof rootReducer>;
