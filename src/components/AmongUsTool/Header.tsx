import React from "react";
import styled from "styled-components";

import { Typography, AppBar, Toolbar } from "@material-ui/core";
import ExportButton from "./ExportButton";
import ImportButton from "./ImportButton";
import AmongUsIcon from "../../assets/image/AmongUsIcon.png";

const StyledToolbar = styled(Toolbar)`
  flex-wrap: wrap;
`;
const Img = styled("img")`
  height: 40px;
  margin-right: ${(props) => props.theme.spacing(1)};
  border-radius: 8px;
`;
const Title = styled(Typography).attrs({ variant: "h6" })`
  flex-grow: 1;
`;
const Buttons = styled("span")`
  & > *:not(:last-child) {
    margin-right: ${(props) => props.theme.spacing(2)};
  }
`;

const Header: React.FunctionComponent = () => {
  return (
    <AppBar>
      <StyledToolbar>
        <Img src={AmongUsIcon} />
        <Title>AmongUs Tool</Title>
        <Buttons>
          <ExportButton />
          <ImportButton />
        </Buttons>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
