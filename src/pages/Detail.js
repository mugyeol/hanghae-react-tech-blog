import React from "react";
import styled from "styled-components";
import CommentList from "../features/comment/CommentList";
import Comment from "../features/comment/Comment";
import { useParams } from "react-router-dom";
import Profile from "../features/profile/Profile";
import Post from "../features/post/Post";
import Layout from "../components/Layout";

const Detail = () => {
  const { param } = useParams();

  return (
    <Layout>
      <Stcontainer>
        <Post param={param} />
        <div>
          <Profile />
        </div>
        <Comment />
        <CommentList />
      </Stcontainer>
    </Layout>
  );
};

export default Detail;
const Stcontainer = styled.div`
  margin: 0 auto;
  width: 1000px;
  min-width: 800px;
  padding: 40px;
`;
const Category = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 89%;
  height: 40px;
  font-size: 20px;
  border: 2px solid #323232;
  border-radius: 12px;
  margin: 15px 0 10px 30px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 70px;
  font-size: 30px;
  border: 2px solid #323232;
  border-radius: 12px;
  margin: 15px 0 10px 30px;
`;

const Stbody = styled.div`
  font-size: 30px;
  border: 2px solid #323232;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 500px;
  margin: 15px 0 20px 30px;
`;
