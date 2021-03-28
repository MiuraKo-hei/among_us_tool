import { Color } from "../../constant";

export type MemberId = string;
export type Member = {
  memberId: MemberId;
  color: Color;
  name: string;
  alibis: boolean[];
  hasButton: boolean;
  ejected: boolean;
};
export type State = {
  members: { [x in MemberId]?: Member };
  displayList: MemberId[];
};
