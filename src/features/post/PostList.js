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
import MarkdownRenderer from "../comment/MarkdownRerder";

const PostList = () => {
  const dispatch = useDispatch();
  const { posts, error } = useSelector((state) => state.posts);
  console.log("postList component posts", posts);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("use Effect");
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
          <Button
            border={category.isActive ? `3px solid var(--color-point1)` : null}
            key={category.id}
            onClick={() => onClicCategorykHandler(category.ctgr)}
          >
            {category.ctgr}
          </Button>
        ))}
      </StCategory>
      {posts.list.map((post) => (
        <Card key={post.pId}>
          <h1
            onClick={() => {
              navigate(`/post/${post.id}`);
            }}
          >
            {post.title}
          </h1>
          <MarkdownRenderer
            onClick={() => {
              navigate(`/post/${post.id}`);
            }}
            markdown={post.content}
            readOnly
            rows={4}
            fontsize="13px"
            height="80px"
            margin="0 0 5px 0 "
          />
          <Button onClick={() => onClicCategorykHandler(post.category)}>
            {post.category}
          </Button>
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
  /* cursor: grab; */
  border-radius: 10px;

  h1 {
    font-size: 25px;
    cursor: pointer;
  }
  textarea {
    font-size: 15px;
    margin-top: 10px;
    resize: none;
    width: 100%;
    border-color: transparent;
    cursor: pointer;
  }
`;
const StCategory = styled.div`
  display: flex;
  direction: row;
  gap: 10px;
  padding: 5px;
  align-items: center;
  justify-content: flex-start;
  margin: 0 20px;
`;
