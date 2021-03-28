import { TableRow, TableCell } from "@material-ui/core";
import React from "react";
import { RANGE } from "../../constant";
import ResetEventButton from "./ResetEventButton";

const EventNumberRow: React.FunctionComponent = () => {
  return (
    <TableRow>
      <TableCell>
        <ResetEventButton />
      </TableCell>
      {Array(RANGE)
        .fill(0)
        .map((_v, eventIndex) => (
          <TableCell>{eventIndex + 1}</TableCell>
        ))}
      <TableCell></TableCell>
    </TableRow>
  );
};

export default EventNumberRow;
