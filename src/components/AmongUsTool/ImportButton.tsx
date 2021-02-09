import { Button } from "@material-ui/core";
import { uniqueId } from "lodash-es";
import React from "react";
import { useDispatch } from "react-redux";
import { colors, JsonFormat, RANGE } from "../../constant";
import { Member, memberOperations } from "../../modules/member";

const ImportButton: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const importJsonFile = () => {
    const fr = new FileReader();
    fr.onload = (e) => {
      if (e.target?.result && typeof e.target.result === "string") {
        const parsed: JsonFormat = JSON.parse(e.target.result);
        const members: Member[] = parsed.members.map((member) => ({
          memberId: uniqueId(),
          color: colors[member.color],
          name: member.name,
          isDead: false,
          alibis: Array(RANGE).fill(false),
        }));
        console.log(members);
        dispatch(memberOperations.importMembers({ members }));
      }
    };
    const inputElement = document.createElement("input");
    document.body.appendChild(inputElement);
    inputElement.type = "file";
    inputElement.accept = "application/json";
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore めんどい
    inputElement.style = "display: none;";
    inputElement.onchange = (e) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore めんどい
      const file = e.target?.files[0] as File | undefined;
      if (file) {
        fr.readAsText(file);
      }
      inputElement.remove();
    };
    inputElement.click();
  };
  return (
    <Button
      onClick={() => {
        importJsonFile();
      }}
    >
      読み込み
    </Button>
  );
};

export default ImportButton;
