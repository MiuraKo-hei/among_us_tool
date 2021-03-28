import {
  TableRow,
  TableCell,
  Select,
  MenuItem,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { EventType, eventTypes } from "../../constant";
import { eventOperations, eventSelectors } from "../../modules/event";
import DeadImage from "../../assets/image/DeadCharacter.png";
import styled from "styled-components";

const Img = styled("img")`
  width: auto;
  height: 32px;
  margin-right: ${(props) => props.theme.spacing(0.5)};
`;
const StyledSelect = styled(Select).attrs({
  fullWidth: true,
})`
  & span {
    height: 32px;
  }
`;

const EventTypeRow: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const events = eventSelectors.useEvents();
  const onChangeEventType = (eventIndex: number, value: EventType) => {
    dispatch(eventOperations.updateType({ eventIndex, type: value }));
  };
  return (
    <TableRow>
      <TableCell>起きたこと</TableCell>
      {events.map((event, eventIndex) => (
        <TableCell>
          <StyledSelect
            value={event.type || ""}
            onChange={(e) => {
              const value = e.target.value as EventType;
              onChangeEventType(eventIndex, value);
            }}
          >
            <MenuItem value={undefined}>
              <Typography>_</Typography>
            </MenuItem>
            <MenuItem value={eventTypes.Dead}>
              <Img src={DeadImage} alt="Dead" />
              <Typography>死亡</Typography>
            </MenuItem>
          </StyledSelect>
        </TableCell>
      ))}
      <TableCell />
    </TableRow>
  );
};

export default EventTypeRow;
