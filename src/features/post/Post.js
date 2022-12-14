import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import MarkdownRenderer from "../comment/MarkdownRerder";
import Button from "../../elem/Button";

const Post = ({ param, post }) => {
  const navigate = useNavigate();

  // date 가져오기
  const date = new window.Date();
  const selectDate = date.toLocaleDateString("ko-kr");

  const onClickEditHandler = (id) => {
    navigate(`/form/${id}`);
  };

  const onClickDeleteHandler = (id) => {
    if (!window.confirm("삭제하시겠습니까?")) {
      // '아니오'에 대한 기능
    } else {
      // '네'에 대한 기능
      axios.delete(`http://localhost:3001/posts/${id}`);
      navigate("/");
    }
  };
  return (
    <div>
      <ButtonContainer>
        <Button
          onClick={() => {
            onClickEditHandler(param);
          }}
        >
          수정
        </Button>
        <Button
          onClick={() => {
            onClickDeleteHandler(param);
          }}
        >
          삭제
        </Button>
      </ButtonContainer>
      <Title>{post.title}</Title>
      <SubTitleContainer>
        <Category> #{post.category}</Category>
        <Date>{selectDate}</Date>
      </SubTitleContainer>
      <ContentContainer>
        <MarkdownRenderer
          markdown={post.content}
          fontsize="18px"
          height="300px"
        ></MarkdownRenderer>
      </ContentContainer>
    </div>
  );
};

const Title = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px 15px;
  /* height: 70px; */
  font-size: 30px;
  font-weight: 800;
  /* margin: 40px 0 10px 30px; */
  color: var(--color-point1);
  border-bottom: solid 2px var(--color-point1);
`;

const SubTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding: 2px 10px;
`;

const Category = styled.div`
  font-size: 18px;
  color: var(--color-point2);
  border: 1px solid var(--color-point2);
  padding: 4px 15px;
  border-radius: 10px;
`;

const Date = styled.div`
  font-size: 12px;
  font-style: italic;
`;

const ContentContainer = styled.div`
  border-radius: 10px;
  margin: 15px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
`;

export default Post;
