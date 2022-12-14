import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CommentList from "../features/comment/CommentList";
import Comment from "../features/comment/Comment";
import axios from "axios";
import { useParams } from "react-router-dom";
import Profile from "../features/profile/Profile";
import postSlice from "../redux/modules/postSlice";
import { serverUrl } from "../redux/modules";

const Detail = () => {
  const { param } = useParams();
  const [post, setPost] = useState({
    title: "",
    content: "",
  });

  const fetchPost = async () => {
    const { data } = await axios.get(`${serverUrl}/post`);
    const post = data.find((post) => post.id === parseInt(param));
    setPost(post);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <Stcontainer>
      <Title>{post.title}</Title>
      {post.category}
      <Stbody>{post.content}</Stbody>
      <div>
        <Profile />
      </div>
      <Comment />
      <CommentList />
    </Stcontainer>
  );
};

export default Detail;
const Stcontainer = styled.div`
  margin: 0 auto;
  width: 1000px;
  min-width: 800px;
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
