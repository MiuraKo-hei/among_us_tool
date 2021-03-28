import some from "lodash-es/some";
import { ColorName, colors, JsonFormat } from "../constant";

const isColorName = (value: string): value is ColorName =>
  some(colors, (color) => value === color.name);

export const isJsonFormat = (value: Object): value is JsonFormat => {
  const tmp = value as JsonFormat;
  if (Array.isArray(tmp.members)) {
    return tmp.members.every((member) => {
      if (isColorName(member.color) && typeof member.name === "string") {
        return true;
      }
      return false;
    });
  }
  return false;
};
