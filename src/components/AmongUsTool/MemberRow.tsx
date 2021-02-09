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

import CloseIcon from "@material-ui/icons/Close";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import EmergencyButtonImage from "../../assets/image/EmergencyButton.png";
import { Color, ColorName, colors, eventTypes } from "../../constant";
import { eventSelectors } from "../../modules/event";
const MemberData = styled("div")`
  display: flex;
  align-items: center;
  & > :not(:last-child) {
    margin-right: ${(props) => props.theme.spacing(0.5)};
  }
`;
const StyledIconButton = styled(IconButton)``;
const Img = styled("img")`
  width: 30px;
  height: auto;
`;
const NameTextField = styled(TextField)`
  width: 120px;
`;
const ButtonImg = styled(Img).attrs({ src: EmergencyButtonImage })<{
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
            {Object.keys(colors).map((colorName) => (
              <MenuItem value={colorName}>
                <Img
                  src={(colors[colorName as ColorName] as Color).image}
                ></Img>
              </MenuItem>
            ))}
          </Select>
          <NameTextField
            value={member.name}
            onChange={(e) => {
              onChangeName(member.memberId, e.target.value);
            }}
          />
          <ButtonImg hasButton={hasButton} />
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
            <CloseIcon />
          </StyledIconButton>
        </LastCellBody>
      </StyledTableCell>
    </TableRow>
  );
};

export default MemberRow;
