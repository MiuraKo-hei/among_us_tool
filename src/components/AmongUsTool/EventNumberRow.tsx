import { TableRow, TableCell, Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { RANGE } from "../../constant";
import ResetEventButton from "./ResetEventButton";

const FirstCellWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const EventNumberRow: React.FunctionComponent = () => {
  return (
    <TableRow>
      <TableCell>
        <FirstCellWrapper>
          <Typography>イベント</Typography>
          <ResetEventButton />
        </FirstCellWrapper>
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
