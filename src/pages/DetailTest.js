import React from "react";
import styled from "styled-components";
import CommentList from "../features/comment/CommentList";
import Comment from "../features/comment/Comment";
import { useParams } from "react-router-dom";
import Profile from "../features/profile/Profile";

//----------- Post 컴포넌트 추가 -----------//
import Post from "../features/post/Post";
//--------------------------------------//

const DetailTest = () => {
  const { param } = useParams();

  return (
    <Stcontainer>
      {/*--- post 추가----*/}
      <Post param={param} />
      {/* ----------------*/}
      <div>
        <Profile />
      </div>
      <Comment />
      <CommentList />
    </Stcontainer>
  );
};

export default DetailTest;

//---------------- 디자인 추가 --------------//
const Stcontainer = styled.div`
  margin: 0 auto;
  width: 1000px;
  min-width: 800px;
  padding: 40px;
`;
//--------------------------------------//
