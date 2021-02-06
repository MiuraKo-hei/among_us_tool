import { TableRow, TableCell } from "@material-ui/core";
import React from "react";
import { RANGE } from "../../constant";
import MemoCell from "./MemoCell";

const MemoRow: React.FunctionComponent = () => {
  return (
    <TableRow>
      <TableCell>Memo</TableCell>
      {Array(RANGE)
        .fill("")
        .map(() => (
          <MemoCell />
        ))}
      <TableCell />
    </TableRow>
  );
};

export default MemoRow;
