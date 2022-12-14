import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { serverUrl } from "../../redux/modules";
// 리덕스
import { useDispatch, useSelector } from "react-redux";
import { __getDetailmain } from "../../redux/modules/detailmainSlice";
// 스타일
import styled from "styled-components";
// 컴포넌트
import MarkdownRenderer from "../comment/MarkdownRerder";
import Button from "../../elem/Button";

const Post = ({ param }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { detailmainPost, error } = useSelector(
    (state) => state.detailmainPost
  );

  // 내용 받아오기
  useEffect(() => {
    dispatch(__getDetailmain(param), [dispatch]);
  }, [dispatch, param]);

  // date 가져오기
  const date = new window.Date();
  const selectDate = date.toLocaleDateString("ko-kr");

  // 수정 클릭 시
  const onClickEditHandler = (id) => {
    navigate(`/form/${id}`);
  };

  // 삭제 클릭 시
  const onClickDeleteHandler = async (id) => {
    if (!window.confirm("삭제하시겠습니까?")) {
      // '아니오' 클릭 시 다시 원위치
    } else {
      // '네' 클릭 시
      try {
        await axios.delete(`${serverUrl}/posts/${id}`);
        navigate("/");
      } catch (error) {
        console.log(error);
      }
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
      <Title>{detailmainPost.title}</Title>
      <SubTitleContainer>
        <Category> #{detailmainPost.category}</Category>
        <Date>{selectDate}</Date>
      </SubTitleContainer>
      <ContentContainer>
        <MarkdownRenderer
          markdown={detailmainPost.content}
          fontsize="18px"
          height="auto"
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
  font-size: 30px;
  font-weight: 800;
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

export default React.memo(Post);
