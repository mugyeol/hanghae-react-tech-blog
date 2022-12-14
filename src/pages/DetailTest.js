import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CommentList from "../features/comment/CommentList";
import Comment from "../features/comment/Comment";
import axios from "axios";
import { useParams } from "react-router-dom";
import Profile from "../features/profile/Profile";

// Post 기능 추가
import Post from "../features/post/Post";

const DetailTest = () => {
  const { param } = useParams();
  const [post, setPost] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    fetchPost();
  }, []);

  // 데이터 받아오는 법 수정
  const fetchPost = async () => {
    const { data } = await axios.get(`http://localhost:3001/posts/${param}`);
    // const post = data.find((post) => post.id === parseInt(param));
    setPost(data);
  };

  return (
    <Stcontainer>
      {/* 여기부터 안수빈 */}
      <Post param={param} post={post} />
      {/* 여기까지 내가 할 것 */}
      <div>
        <Profile />
      </div>
      <Comment />
      <CommentList />
    </Stcontainer>
  );
};

export default DetailTest;

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

//-- 안 디자인 추가 --//
const Stcontainer = styled.div`
  margin: 0 auto;
  width: 1000px;
  min-width: 800px;
  padding: 40px;
`;
