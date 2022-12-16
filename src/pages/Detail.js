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
