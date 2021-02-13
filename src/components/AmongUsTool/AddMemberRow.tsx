import { TableRow, TableCell, Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { RANGE } from "../../constant";
import { memberOperations } from "../../modules/member";
import AddIcon from "../../assets/icons/Add.svg";
import styled from "styled-components";

const StyledAddIcon = styled(AddIcon)`
  fill: ${(props) => props.theme.palette.primary.main};
`;

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
          startIcon={<StyledAddIcon />}
          onClick={() => {
            onClickAddButton();
          }}
        >
          追加
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
