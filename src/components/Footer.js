import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  transform: translateY(-100%);
  display: flex;
  justify-content: center;
  width: 100vw;
  padding: 20px;
  background-color: white;
  z-index: 1;
`;

const Footer = () => {
  return (
    <Container>
      <div>© Mugyeol, suno0140, AnSuebin</div>
    </Container>
  );
};

export default Footer;
