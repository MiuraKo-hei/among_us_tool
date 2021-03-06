import { Button } from "@material-ui/core";
import uniqueId from "lodash-es/uniqueId";
import React from "react";
import { useDispatch } from "react-redux";
import { colors, JsonFormat, RANGE } from "../../constant";
import { Member, memberOperations } from "../../modules/member";
import { isJsonFormat } from "../../utils/parseJson";

const ImportButton: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const importJsonFile = () => {
    const fr = new FileReader();
    fr.onload = (e) => {
      if (e.target?.result && typeof e.target.result === "string") {
        try {
          const parsed: JsonFormat = JSON.parse(e.target.result);
          if (isJsonFormat(parsed)) {
            const members: Member[] = parsed.members.map((member) => ({
              memberId: uniqueId(),
              color: colors[member.color],
              name: member.name,
              alibis: Array(RANGE).fill(false),
              hasButton: true,
              ejected: false,
            }));
            dispatch(memberOperations.importMembers({ members }));
          } else {
            alert("ファイルに不備があります。");
          }
        } catch {
          alert("エラーが発生しました。");
        }
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
