import { Color } from "../../constant";

export type MemberId = string;
export type Member = {
  memberId: MemberId;
  color: Color;
  name: string;
  isDead: boolean;
  alibis: boolean[];
};
export type State = {
  members: { [x in MemberId]?: Member };
  displayList: MemberId[];
};
