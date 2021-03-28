import { TableRow, TableCell, Select, MenuItem } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { eventOperations, eventSelectors } from "../../modules/event";
import styled from "styled-components";
import { MemberId, memberSelectors } from "../../modules/member";

const ImgWrapper = styled("span")`
  width: 32px;
  margin-right: ${(props) => props.theme.spacing(0.5)};
`;
const Img = styled("img")`
  width: auto;
  height: 32px;
`;
const StyledSelect = styled(Select).attrs({
  fullWidth: true,
})`
  & span {
    height: 32px;
  }
`;

const EventTargetRow: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const members = memberSelectors.useMembers();
  const events = eventSelectors.useEvents();
  const onChangeTargetMember = (eventIndex: number, value: MemberId) => {
    dispatch(eventOperations.updateMemberId({ eventIndex, memberId: value }));
  };
  return (
    <TableRow>
      <TableCell>死体</TableCell>
      {events.map((event, eventIndex) => (
        <TableCell>
          <StyledSelect
            value={event.targetMemberId || ""}
            onChange={(e) => {
              const value = e.target.value as EventType;
              onChangeTargetMember(eventIndex, value);
            }}
          >
            <MenuItem value={undefined} key="_">
              _
            </MenuItem>
            {members.map((member) => (
              <MenuItem value={member.memberId} key={member.memberId}>
                <ImgWrapper>
                  <Img src={member.color.image} alt={member.color.name} />
                </ImgWrapper>
                {member.name}
              </MenuItem>
            ))}
          </StyledSelect>
        </TableCell>
      ))}
      <TableCell />
    </TableRow>
  );
};

export default EventTargetRow;
