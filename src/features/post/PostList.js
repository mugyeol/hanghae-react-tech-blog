import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Stack from "../../elem/Stack";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { __getPosts } from "../../redux/modules/postSlice";

const PostList = () => {
  const dispatch = useDispatch();
  const { posts, error } = useSelector((state) => state.posts);
  console.log(posts, "posts");
  // const [postState, setPostState] = useState([]);
  const navigate = useNavigate();

  // const fetchPosts = async () => {
  //   const { data } = await axios.get("http://localhost:3001/data");
  //   setPostState(data.posts); // 서버로부터 fetching한 데이터를 useState의 state로 set 합니다.
  // };

  useEffect(() => {
    dispatch(__getPosts());
  }, [dispatch]);

  return (
    <Stack
      justify="flex-start"
      align="flex-start"
      direction="column"
      gap="40px"
    >
      {posts.map((post) => (
        <Card
          onClick={() => {
            navigate(`/post/${post.pId}`);
          }}
        >
          <h1>{post.title}</h1>
          <textarea readOnly rows={4}>
            {post.content}
          </textarea>
        </Card>
      ))}
    </Stack>
  );
};

export default PostList;
const Card = styled.div`
  /* border: 1px solid blueviolet; */
  width: 100%;
  height: 170px;
  padding: 15px;
  cursor: grab;
  border: 1px solid black;

  h1 {
    font-size: 25px;
  }
  textarea {
    font-size: 15px;
    margin-top: 10px;
    resize: none;
    width: 100%;
    border-color: transparent;
    cursor: grab;
  }
`;
