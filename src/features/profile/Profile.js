import React from "react";
import Stack from "../../elem/Stack";
import logo from "../../asset/pic1.jpg";
import styled from "styled-components";
import Wrapper from "../../elem/Wrapper";
import { Link } from "react-router-dom";
import Button from "../../elem/Button";
import { useNavigate } from "react-router-dom";

const Profile = ({ isMain }) => {
  const navigate = useNavigate();
  return (
    <Fragment>
      {/* align, justify, direction */}
      <Stack
        justify="flex-start"
        align="flex-start"
        direction="column"
        mg="40px 0 10px"
      >
        {isMain && (
          <h1
            onClick={() => {
              navigate("/");
            }}
          >
            hanghae99.dev
          </h1>
        )}
        <Stack justify="flex-start" align="center" direction="row" mg="20px 0">
          <Img onClick={() => navigate("/")} src={logo} />
          <Wrapper mg="0 0 0 5px">
            <Wrapper>
              <span>Written by rtan</span>
            </Wrapper>
            <Wrapper>
              <a href="https://github.com/mugyeol">
                <span>GitHub</span>
              </a>
            </Wrapper>
            <Button
              onClick={() => {
                navigate("form");
              }}
            >
              글쓰기
            </Button>
          </Wrapper>
        </Stack>
      </Stack>
    </Fragment>
  );
};

export default Profile;

const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 20px;
  cursor: pointer;
`;
const Fragment = styled.div`
  span {
    font-size: 13px;
  }
  h1 {
    font-size: 35px;
    cursor: pointer;
  }
`;
