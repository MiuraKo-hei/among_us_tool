import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Link,
  Typography,
} from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import UsagePng from "../../assets/image/usage.png";
import FaceImage from "../../assets/image/Face.png";
import { usageOperations, usageSelectors } from "../../modules/usage";
import { useDispatch } from "react-redux";

const Container = styled("div")``;
const UsageImage = styled("img").attrs({ src: UsagePng, alt: "usage" })`
  width: 100%;
  max-width: 1200px;
  border: 1px solid ${(props) => props.theme.palette.divider};
`;
const Section = styled("div")`
  margin-bottom: ${(props) => props.theme.spacing(1)};
`;
const SectionTitle = styled(Typography).attrs({ variant: "h5" })``;

const TwitterArea = styled("span")`
  display: flex;
  align-items: flex-end;
`;
const StyledTwitterImage = styled("img").attrs({ src: FaceImage })`
  width: 32px;
  height: 32px;
  border-radius: 100px;
`;

const TwitterName = styled(Typography)`
  line-height: 1;
`;
const Usage: React.FunctionComponent = () => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(usageOperations.close());
  };
  const open = usageSelectors.useOpen();
  return (
    <Container>
      <Dialog open={open} onClose={handleClose} maxWidth="lg" scroll="paper">
        <DialogContent>
          <Section>
            <SectionTitle>1. 概要</SectionTitle>
            <Typography>Among Usの状況整理ツールです。</Typography>
          </Section>
          <Section>
            <SectionTitle>2. 画面説明</SectionTitle>
            <UsageImage />
          </Section>
          <Section>
            <SectionTitle>作者</SectionTitle>

            <Link
              underline="none"
              href="https://twitter.com/Warabimochi_m"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterArea>
                <StyledTwitterImage />
                <TwitterName>@Warabimochi_m</TwitterName>
              </TwitterArea>
            </Link>
          </Section>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="default">
            閉じる
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Usage;
