import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { eventOperations } from "../../modules/event";

const ResetEventButton: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const onClickResetEventButton = () => {
    dispatch(eventOperations.reset());
  };
  return (
    <Button
      onClick={() => {
        onClickResetEventButton();
      }}
    >
      リセット
    </Button>
  );
};

export default ResetEventButton;
