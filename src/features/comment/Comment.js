import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../elem/Button";
import { useDispatch } from "react-redux";
import { __addComment } from "../../redux/modules/commentSlice";
import { useParams } from "react-router-dom";

const Comment = () => {
  const dispatch = useDispatch();
  const { param } = useParams();

  const [addComment, setAddComment] = useState({
    useName: "",
    comment: "",
    postId: 0,
    isDone: false,
  });

  const onClickAddButton = (addComment) => {
    if (addComment.useName === "" || addComment.comment === "") {
      alert("닉네임과 댓글을 입력해주세요");
    } else {
      dispatch(__addComment({ ...addComment, postId: param }));
    }
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
  width: 71%;
  padding: 10px 10px;
  margin: 15px 10px 20px 5px;
  box-sizing: border-box;
  border: solid 2px var(--color-point1);
  border-radius: 8px;
`;

const StUserName = styled.input`
  width: 17%;
  padding: 10px 10px;
  margin: 15px 0 20px 30px;
  box-sizing: border-box;
  border: solid 2px var(--color-point1);
  border-radius: 8px;
`;
