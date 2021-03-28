import React from "react";
import {
  Member,
  MemberId,
  memberOperations,
  memberSelectors,
} from "../../modules/member";
import {
  Checkbox,
  Select,
  MenuItem,
  TableCell,
  TableRow,
  TextField,
  IconButton,
  FormControlLabel,
} from "@material-ui/core";

import CloseIcon from "../../assets/icons/Close.svg";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import EmergencyButtonImage from "../../assets/image/EmergencyButton.png";
import { ColorName, colors, eventTypes } from "../../constant";
import { eventSelectors } from "../../modules/event";
const MemberData = styled("div")`
  display: flex;
  align-items: center;
  & > :not(:last-child) {
    margin-right: ${(props) => props.theme.spacing(0.5)};
  }
`;
const StyledIconButton = styled(IconButton).attrs({
  "aria-label": "close",
  tabindex: -1,
})``;
const StyledCloseIcon = styled(CloseIcon)`
  fill: ${(props) => props.theme.palette.text.secondary};
`;
const Img = styled("img")`
  width: 30px;
  height: auto;
`;
const NameTextField = styled(TextField)`
  width: 120px;
`;
const ButtonImg = styled(Img).attrs({
  src: EmergencyButtonImage,
  alt: "Button",
})<{
  hasButton: boolean;
}>`
  opacity: ${(props) => (props.hasButton ? 1 : 0.2)};
`;
const StyledTableCell = styled(TableCell)<{ isAlive: boolean }>`
  background-color: ${(props) =>
    !props.isAlive && props.theme.palette.grey[400]};
`;
const LastCellBody = styled("div")`
  display: flex;
`;
type Props = {
  member: Member;
};
const MemberRow: React.FunctionComponent<Props> = ({ member }) => {
  const hasButton = memberSelectors.useHasButton(member.memberId);
  const isAlive = memberSelectors.useIsAlive(member.memberId);
  const events = eventSelectors.useEvents();
  const dispatch = useDispatch();
  const onChangeAlibi = (
    memberId: MemberId,
    eventIndex: number,
    alibi: boolean
  ) => {
    dispatch(memberOperations.setAlibi({ memberId, eventIndex, alibi }));
  };
  const onChangeColor = (memberId: MemberId, colorName: ColorName) => {
    dispatch(memberOperations.updateColor({ memberId, colorName }));
  };
  const onChangeName = (memberId: MemberId, name: string) => {
    dispatch(memberOperations.updateName({ memberId, name }));
  };
  const onClickCloseIcon = (memberId: MemberId) => {
    dispatch(memberOperations.removeMember({ memberId }));
  };
  const onClickButton = (memberId: MemberId) => {
    dispatch(memberOperations.toggleHasButton({ memberId }));
  };
  return (
    <TableRow>
      <StyledTableCell isAlive={isAlive}>
        <MemberData>
          <Select
            variant="standard"
            value={member.color.name}
            onChange={(e) => {
              onChangeColor(member.memberId, e.target.value as ColorName);
            }}
          >
            {Object.keys(colors).map((colorName) => {
              const color = colors[colorName as ColorName];
              return (
                <MenuItem value={colorName}>
                  <Img src={color.image} alt={color.name}></Img>
                </MenuItem>
              );
            })}
          </Select>
          <NameTextField
            value={member.name}
            onChange={(e) => {
              onChangeName(member.memberId, e.target.value);
            }}
          />
          <IconButton
            onClick={() => {
              onClickButton(member.memberId);
            }}
          >
            <ButtonImg hasButton={hasButton} />
          </IconButton>
        </MemberData>
      </StyledTableCell>
      {member.alibis.map((alibi, eventIndex) => (
        <StyledTableCell isAlive={isAlive}>
          {events[eventIndex].type === eventTypes.Dead && (
            <FormControlLabel
              label="証明"
              control={
                <Checkbox
                  color="primary"
                  checked={alibi}
                  onChange={(e) => {
                    const isChecked = e.target.checked;
                    onChangeAlibi(member.memberId, eventIndex, isChecked);
                  }}
                />
              }
            />
          )}
        </StyledTableCell>
      ))}
      <StyledTableCell isAlive>
        <LastCellBody>
          <StyledIconButton
            onClick={() => {
              onClickCloseIcon(member.memberId);
            }}
          >
            <StyledCloseIcon />
          </StyledIconButton>
        </LastCellBody>
      </StyledTableCell>
    </TableRow>
  );
};

export default MemberRow;
