import React from "react";
import styled from "styled-components";
import Header from "./Header";
import { Table, TableBody, TableContainer, TableHead } from "@material-ui/core";
import { memberSelectors } from "../../modules/member";
import EventNumberRow from "./EventNumberRow";
import MemoRow from "./MemoRow";
import MemberRow from "./MemberRow";
import EventTargetRow from "./EventTargetRow";
import AddMemberRow from "./AddMemberRow";
import Usage from "./Usage";
import { MEMBER_MAX } from "../../constant";

const Wrapper = styled("div")`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
const StyledTable = styled(Table).attrs({ size: "small" })`
  & td:nth-child(1),
  & th:nth-child(1) {
    /* 横スクロール時に固定する */
    position: sticky;
    left: 0;
    z-index: 2;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-right: 2px solid rgba(224, 224, 224, 1);
    }
  }
`;

const AmongUsTool: React.FunctionComponent = () => {
  const members = memberSelectors.useMembers();
  return (
    <Wrapper>
      <Header />
      <TableContainer>
        <StyledTable>
          <TableHead>
            <EventNumberRow />
            <EventTargetRow />
            <MemoRow />
          </TableHead>
          <TableBody>
            {members.map((member) => (
              <MemberRow member={member} key={member.memberId} />
            ))}
            {members.length < MEMBER_MAX && <AddMemberRow />}
          </TableBody>
        </StyledTable>
      </TableContainer>
      <Usage />
    </Wrapper>
  );
};

export default AmongUsTool;
