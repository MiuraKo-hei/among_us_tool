import React from "react";
import styled from "styled-components";

import { Typography, AppBar, Toolbar, Button } from "@material-ui/core";
import ExportButton from "./ExportButton";
import ImportButton from "./ImportButton";
import Icon from "../../assets/image/Icon.png";
import { usageOperations } from "../../modules/usage";
import { useDispatch } from "react-redux";

const StyledAppBar = styled(AppBar)``;
const StyledToolbar = styled(Toolbar)`
  flex-wrap: wrap;
  padding-right: ${(props) => props.theme.spacing(1)};
`;
const Img = styled("img")`
  height: 40px;
  margin-right: ${(props) => props.theme.spacing(1)};
  border-radius: 8px;
`;
const TitleArea = styled("div")`
  display: flex;
  flex-grow: 1;
  align-items: center;
  & > *:not(:last-child) {
    margin-right: ${(props) => props.theme.spacing(1)};
  }
`;
const Title = styled(Typography).attrs({ variant: "h6" })``;
const Buttons = styled("span")`
  & > *:not(:last-child) {
    margin-right: ${(props) => props.theme.spacing(2)};
  }
  margin-right: ${(props) => props.theme.spacing(1)};
`;

const Header: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const openUsage = () => {
    dispatch(usageOperations.open());
  };

  return (
    <StyledAppBar>
      <StyledToolbar>
        <Img src={Icon} alt="AmongUs" />
        <TitleArea>
          <Title>AmongUs状況整理ツール</Title>
          <Button onClick={openUsage}>説明</Button>
        </TitleArea>

        <Buttons>
          <ExportButton />
          <ImportButton />
        </Buttons>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Header;
