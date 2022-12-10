import React from "react";
import styled from "styled-components";

const Wrapper = ({children,pd,mg}) => {
  return <StContainer pd={pd} mg={mg}>{children}</StContainer>;
};

export default Wrapper;

const StContainer = styled.div`
  width: 100%;
  padding: ${({ pd }) => pd || "5px"};
  margin: ${({ mg }) => mg};
`;
