import { css } from "styled-components";

const flex = ({ justify="center", align="center", direction="center" }) => {
  return css`
    display: flex;
    align-items: ${align};
    justify-content: ${justify};
    flex-direction: ${direction};
  `;
};

export default flex;
