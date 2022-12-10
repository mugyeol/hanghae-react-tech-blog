

import React from "react";
import styled from "styled-components";
import flex from "../lib/flex";

const Stack = ({ children, align, justify, direction }) => {
  return (
    <StContainer align={align} justify={justify} direction={direction}>
      {children}
    </StContainer>
  );
};

export default Stack;

const StContainer = styled.div`
  /* width: 100%; */
  ${({ align, justify, direction }) =>
    flex({
      align,
      justify,
      direction,
    })}
`;
