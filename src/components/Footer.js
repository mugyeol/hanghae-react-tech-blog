import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  width: 100vw;
  padding: 20px;
`;

const Footer = () => {
  return (
    <Container>
      <div>© Mugyeol, suno0140, AnSuebin</div>
    </Container>
  );
};

export default Footer;
