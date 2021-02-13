import React from "react";
import styled from "styled-components";
import { Color } from "../../constant";

type Props = { color: Color };
const Img = styled("img")`
  width: 30px;
`;

const MemberImage: React.FunctionComponent<Props> = ({ color }) => {
  return <Img src={color.image} alt={color.name} />;
};

export default MemberImage;
