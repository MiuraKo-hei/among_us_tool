import React, { useEffect, useState } from "react";

import { TableCell, TextField } from "@material-ui/core";
import { eventSelectors } from "../../modules/event";
import styled from "styled-components";

const StyledTextField = styled(TextField).attrs({
  fullWidth: true,
  multiline: true,
  rows: 3,
})`
  min-width: 160px;
`;

const MemoCell: React.FunctionComponent = () => {
  const [value, setValue] = useState("");
  const resetCounter = eventSelectors.useResetCounter();
  // reset
  useEffect(() => {
    setValue("");
  }, [resetCounter]);
  return (
    <TableCell>
      <StyledTextField
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </TableCell>
  );
};

export default MemoCell;
