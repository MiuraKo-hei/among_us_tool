import { combineReducers } from "@reduxjs/toolkit";
import member from "./member";
import event from "./event";

export const rootReducer = combineReducers({
  member,
  event,
});

export type RootState = ReturnType<typeof rootReducer>;
