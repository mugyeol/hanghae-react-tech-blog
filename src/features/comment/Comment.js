import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Button from "../../elem/Button";

const Comment = () => {
  const [comments, setComments] = useState("");

  const [addComment, setAddComment] = useState({
    useName: "",
    comment: "",
    isDone: false,
  });

  const onClickAddButton = (comment) => {
    console.log(comment);
    axios.post("http://localhost:3001/comments", comment);
    setAddComment({
      useName: "",
      comment: "",
      isDone: false,
    });
    setComments([...comments, comment]);
  };

  return (
    <StComment>
      <StUserName
        type="text"
        value={addComment.useName}
        onChange={(event) => {
          const { value } = event.target;
          setAddComment({
            ...addComment,
            useName: value,
          });
        }}
        placeholder="닉네임을 입력해주세요"
      ></StUserName>
      <StCommentInput
        type="text"
        value={addComment.comment}
        onChange={(event) => {
          const { value } = event.target;
          setAddComment({
            ...addComment,
            comment: value,
          });
        }}
        placeholder="댓글을 달아주세요"
      ></StCommentInput>
      <Button
        type="button"
        onClick={() => {
          onClickAddButton(addComment);
        }}
      >
        작성
      </Button>
    </StComment>
  );
};

export default Comment;

const StComment = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  height: 100px;
  font-size: 20px;
  margin: 15px 0;
`;

const StCommentInput = styled.input`
  width: 68%;
  padding: 10px 10px;
  margin: 15px 10px 20px 5px;
  box-sizing: border-box;
  border: solid 2px #323232;
  border-radius: 8px;
`;

const StUserName = styled.input`
  width: 17%;
  padding: 10px 10px;
  margin: 15px 0 20px 30px;
  box-sizing: border-box;
  border: solid 2px #323232;
  border-radius: 8px;
`;
