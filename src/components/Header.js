import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: var(--color-point1);
  padding: 20px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
`;

const MainTitle = styled.div`
  color: #ffffff;
  font-size: 20px;
  font-weight: 900;
`;

const GithubIcon = styled.img`
  width: 30px;
  filter: invert(96%) sepia(94%) saturate(11%) hue-rotate(315deg)
    brightness(105%) contrast(100%);
`;

const Header = () => {
  return (
    <Container>
      <MainTitle>Hi.dev</MainTitle>
      <GithubIcon
        src={process.env.PUBLIC_URL + "/imgs/github.svg"}
        alt="giticon"
      ></GithubIcon>
    </Container>
  );
};

export default Header;
