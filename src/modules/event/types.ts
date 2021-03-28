import { MemberId } from "../member";

export type Event = {
  targetMemberId?: MemberId;
};
export type State = {
  events: Event[];
  resetCounter: number;
};
