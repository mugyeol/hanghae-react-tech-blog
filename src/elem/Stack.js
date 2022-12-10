import React from "react";
import styled from "styled-components";
import flex from "../lib/flex";

const Stack = ({ children, align, justify, direction, mg, pd }) => {
  return (
    <StContainer
      align={align}
      justify={justify}
      direction={direction}
      mg={mg}
      pd={pd}
    >
      {children}
    </StContainer>
  );
};

export default Stack;

const StContainer = styled.div`
  width: 100%;
  ${({ align, justify, direction }) =>
    flex({
      align,
      justify,
      direction,
    })}
  margin: ${({ mg }) => mg || "0"};
  padding: ${({ pd }) => pd || "0"};
`;
