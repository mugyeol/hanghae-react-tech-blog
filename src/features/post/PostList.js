import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Stack from "../../elem/Stack";
import axios from "axios";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";
import {
  __getPosts,
  __getPostsByCategory,
} from "../../redux/modules/postSlice";
import Button from "../../elem/Button";

const PostList = () => {
  const dispatch = useDispatch();
  const { posts, error } = useSelector((state) => state.posts);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(__getPosts());
  }, [dispatch]);

  const onClicCategorykHandler = (ctgr) => {
    ctgr === "All"
      ? dispatch(__getPosts())
      : dispatch(__getPostsByCategory(ctgr));
  };

  return (
    <Stack
      justify="flex-start"
      align="flex-start"
      direction="column"
      gap="40px"
    >
      <StCategory>
        {posts.categories.map((category) => (
          <Button border={category.isActive ? `3px solid var(--color-point1)` : null} key={category.id} onClick={() => onClicCategorykHandler(category.ctgr)}>
            {category.ctgr}
          </Button>
        ))}
      </StCategory>
      {posts.list.map((post) => (
        <Card key={post.pId} 
          onClick={() => {
            navigate(`/post/${post.pId}`);
          }}
        >
          <h1>{post.title}</h1>
          <textarea value={post.content} readOnly rows={4} />
          <Button>{post.category}</Button>
        </Card>
      ))}
    </Stack>
  );
};

export default PostList;
const Card = styled.div`
  border: 1px solid var(--color-point2);
  width: 100%;
  height: 170px;
  padding: 15px;
  cursor: grab;
  border-radius: 10px;

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
const StCategory = styled.div`
  display: flex;
  direction: row;
  gap: 5px;
  padding: 5px;
  align-items: center;
  justify-content: flex-start;
`;
