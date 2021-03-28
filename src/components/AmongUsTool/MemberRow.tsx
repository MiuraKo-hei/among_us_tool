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
  Typography,
  Button,
} from "@material-ui/core";

import CloseIcon from "../../assets/icons/Close.svg";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import EmergencyButtonPng from "../../assets/image/EmergencyButton.png";
import { ColorName, colors } from "../../constant";
import { eventSelectors } from "../../modules/event";
import EjectPng from "../../assets/image/Eject.png";
const MemberData = styled("div")`
  display: flex;
  align-items: flex-end;
  & > :not(:last-child) {
    margin-right: ${(props) => props.theme.spacing(0.5)};
  }
`;
const StyledCloseIconButton = styled(IconButton).attrs({
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
const ImgBase = styled(Img)``;
const ButtonImg = styled(ImgBase).attrs({
  src: EmergencyButtonPng,
  alt: "Button",
})``;
const EjectedImg = styled(ImgBase).attrs({
  src: EjectPng,
  alt: "Eject",
})``;

const IconLabel = styled(Typography).attrs({
  variant: "body2",
})`
  padding-top: ${(props) => props.theme.spacing(0.5)};
  line-height: 1;
`;
const StyledButton = styled(Button).attrs({ size: "small" })<{
  checked: boolean;
}>`
  .MuiButton-label {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  ${ImgBase}, ${IconLabel} {
    opacity: ${(props) => (props.checked ? 1 : 0.2)};
  }
`;
const StyledTableCell = styled(TableCell)<{ isAlive: boolean }>`
  background-color: ${(props) =>
    !props.isAlive && props.theme.palette.grey[400]};
`;
const LastCellBody = styled("div")`
  display: flex;
`;
const StyledSelect = styled(Select)``;
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
  const onClickEjected = (memberId: MemberId) => {
    dispatch(memberOperations.toggleEjected({ memberId }));
  };
  return (
    <TableRow>
      <StyledTableCell isAlive={isAlive}>
        <MemberData>
          <StyledSelect
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
          </StyledSelect>
          <NameTextField
            variant="standard"
            value={member.name}
            onChange={(e) => {
              onChangeName(member.memberId, e.target.value);
            }}
          />
          <StyledButton
            checked={hasButton}
            onClick={() => {
              onClickButton(member.memberId);
            }}
          >
            <ButtonImg />
            <IconLabel>会議</IconLabel>
          </StyledButton>
          <StyledButton
            onClick={() => {
              onClickEjected(member.memberId);
            }}
            checked={member.ejected}
          >
            <EjectedImg />
            <IconLabel>追放</IconLabel>
          </StyledButton>
        </MemberData>
      </StyledTableCell>
      {member.alibis.map((alibi, eventIndex) => (
        <StyledTableCell isAlive={isAlive}>
          {events[eventIndex].targetMemberId && (
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
          <StyledCloseIconButton
            onClick={() => {
              onClickCloseIcon(member.memberId);
            }}
          >
            <StyledCloseIcon />
          </StyledCloseIconButton>
        </LastCellBody>
      </StyledTableCell>
    </TableRow>
  );
};

export default MemberRow;
