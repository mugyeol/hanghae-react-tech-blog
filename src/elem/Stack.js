

import React from "react";
import styled from "styled-components";
import flex from "../lib/flex";

const Stack = ({ children, align, jusify, direction }) => {
  return (
    <StContainer align={align} jusify={jusify} direction={direction}>
      {children}
    </StContainer>
  );
};

export default Stack;

const StContainer = styled.div`
  width: 100%;
  ${({ align, jusify, direction }) =>
    flex({
      align,
      jusify,
      direction,
    })}
`;
