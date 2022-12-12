import React from "react";
import styled, { css } from "styled-components";

const Button = (props) => {
  return (
    <StButton
      border={props.border}
      hover={props.hover}
      type={props.type || "button"}
      onClick={props.onClick}
      color={props.color}
    >
      {props.children}
    </StButton>
  );
};

export default Button;
const StButton = styled.button`
  border: ${({ border }) => border || css`1px solid var(--color-point1)`};
  border-radius: 10px;
  padding: 0.5rem 1.25rem;
  cursor: pointer;
  margin: 0 5px 0 0;
  background-color: white;
  color: ${({ color }) => color || css`var(--color-point1)`};
  &:hover,
  &:active {
    background: ${({ hover }) => hover || css`var(--color-point2)`};
    border-color: ${({ hover }) => hover || css`var(--color-point2)`};
    color: white;
  }

  &:focus {
    outline: none;
  }
`;
