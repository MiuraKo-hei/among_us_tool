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
    return state.event.events
      .filter((t) => t.targetMemberId === memberId)
      .every((t) => t.type !== eventTypes.Dead && t.type !== eventTypes.Eject);
  });

export { useMembers, useHasButton, useIsAlive };
