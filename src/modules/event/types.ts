import { EventType } from "../../constant";
import { MemberId } from "../member";

export type Event = {
  targetMemberId?: MemberId;
  type?: EventType;
};
export type State = {
  events: Event[];
  resetCounter: number;
};
