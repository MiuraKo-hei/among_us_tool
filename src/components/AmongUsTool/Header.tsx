import React, { useState } from "react";
import styled from "styled-components";

import FaceImage from "../../assets/image/Face.png";
import {
  Menu,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  MenuItem,
  Link,
  Button,
} from "@material-ui/core";
import ExportButton from "./ExportButton";
import ImportButton from "./ImportButton";
import Icon from "../../assets/image/Icon.png";
import MoreVertIcon from "../../assets/icons/MoreVert.svg";
import { usageOperations } from "../../modules/usage";
import { useDispatch } from "react-redux";

const StyledAppBar = styled(AppBar)``;
const StyledToolbar = styled(Toolbar)`
  flex-wrap: wrap;
  padding-right: ${(props) => props.theme.spacing(1)};
`;
const StyledTwitterImage = styled("img").attrs({ src: FaceImage })`
  width: 32px;
  height: 32px;
  border-radius: 100px;
`;
const TwitterName = styled(Typography)`
  line-height: 1;
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

const TwitterArea = styled("span")`
  display: flex;
  align-items: flex-end;
`;

const StyledMoreVertIcon = styled(MoreVertIcon)`
  fill: ${(props) => props.theme.palette.text.secondary};
`;
const Header: React.FunctionComponent = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
        <div>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
          >
            <StyledMoreVertIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <Link
                underline="none"
                href="https://twitter.com/Warabimochi_m"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Typography variant="body2" color="textPrimary">
                  作者
                </Typography>
                <TwitterArea>
                  <StyledTwitterImage />
                  <TwitterName>@Warabimochi_m</TwitterName>
                </TwitterArea>
              </Link>
            </MenuItem>
          </Menu>
        </div>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Header;
