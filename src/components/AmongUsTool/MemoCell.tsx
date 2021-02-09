import React, { useEffect, useState } from "react";

import { TableCell, TextField } from "@material-ui/core";
import { eventSelectors } from "../../modules/event";

const MemoCell: React.FunctionComponent = () => {
  const [value, setValue] = useState("");
  const resetCounter = eventSelectors.useResetCounter();
  // reset
  useEffect(() => {
    setValue("");
  }, [resetCounter]);
  return (
    <TableCell>
      <TextField
        multiline
        rows={3}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </TableCell>
  );
};

export default MemoCell;
