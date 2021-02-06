import { TableRow, TableCell, Typography } from "@material-ui/core";
import React from "react";
import { RANGE } from "../../constant";
import ResetEventButton from "./ResetEventButton";

const EventNumberRow: React.FunctionComponent = () => {
  return (
    <TableRow>
      <TableCell>
        <Typography>Event</Typography>
      </TableCell>
      {Array(RANGE)
        .fill(0)
        .map((_v, eventIndex) => (
          <TableCell>Event{eventIndex + 1}</TableCell>
        ))}
      <TableCell>
        <ResetEventButton />
      </TableCell>
    </TableRow>
  );
};

export default EventNumberRow;
