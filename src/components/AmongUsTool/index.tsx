import React from "react";
import styled from "styled-components";
import Header from "./Header";
import { Container } from "@material-ui/core";
const Wrapper = styled("div")`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const AmongUsTool: React.FunctionComponent = () => {
  return (
    <Wrapper>
      <Header />
      <Container>hoge</Container>
    </Wrapper>
  );
};

export default AmongUsTool;
