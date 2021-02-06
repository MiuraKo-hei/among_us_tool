import { TableRow, TableCell, Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { RANGE } from "../../constant";
import { memberOperations } from "../../modules/member";
import AddIcon from "@material-ui/icons/Add";

const AddMemberRow: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const onClickAddButton = () => {
    dispatch(memberOperations.addMember());
  };
  return (
    <TableRow>
      <TableCell>
        <Button
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => {
            onClickAddButton();
          }}
        >
          Add
        </Button>
      </TableCell>
      {Array(RANGE)
        .fill(0)
        .map(() => (
          <TableCell />
        ))}
      <TableCell />
    </TableRow>
  );
};

export default AddMemberRow;
