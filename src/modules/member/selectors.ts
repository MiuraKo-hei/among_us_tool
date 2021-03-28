import { useSelector } from "react-redux";
import { eventTypes } from "../../constant";
import { isTruthy } from "../../utils/array";
import { Member, MemberId } from "./types";

const useMembers = (): Member[] =>
  useSelector((state) =>
    state.member.displayList.map((color) => state.member.members[color])
  ).filter(isTruthy);

const useHasButton = (memberId: MemberId): boolean =>
  useSelector((state) => {
    const member = state.member.members[memberId];
    return member?.hasButton || false;
  });

const useIsAlive = (memberId: MemberId): boolean =>
  useSelector((state) => {
    const killed = state.event.events
      .filter((t) => t.targetMemberId === memberId)
      .some((t) => t.type === eventTypes.Dead);
    const ejected = state.member.members[memberId]?.ejected || false;
    return !killed && !ejected;
  });

export { useMembers, useHasButton, useIsAlive };
