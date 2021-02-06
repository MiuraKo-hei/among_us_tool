import { Button } from "@material-ui/core";
import React from "react";
import { JsonFormat } from "../../constant";
import { memberSelectors } from "../../modules/member";
import { download } from "../../utils/download";

const ExportButton: React.FunctionComponent = () => {
  const members = memberSelectors.useMembers();
  const downloadJsonFile = () => {
    const formatted: JsonFormat = {
      members: members.map((member) => ({
        color: member.color.name,
        name: member.name,
      })),
    };
    const jsonStrings = JSON.stringify(formatted, null, "  ");

    download(jsonStrings, "among_us_tool_template.json", "application/json");
  };
  return (
    <Button
      onClick={() => {
        downloadJsonFile();
      }}
    >
      Export JSON
    </Button>
  );
};

export default ExportButton;
