import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../../elem/Button";
import {
  __getComments,
  __deleteComment,
  changeIsDone,
  __editComment,
} from "../../redux/modules/commentSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const CommentList = () => {
  const dispatch = useDispatch();
  const { param } = useParams();
  const { isLoading, error, comments } = useSelector((state) => state.comments);

  const [editComment, setEditComment] = useState({ comment: "" });

  const onChangeEditHandler = (commentId, edit) => {
    dispatch(__editComment([commentId, edit]));
  };

  const onClickDeleteButton = (commentId) => {
    dispatch(__deleteComment(commentId));
  };
  const onChangeDoneHandler = (index) => {
    dispatch(changeIsDone(index));
  };

  useEffect(() => {
    dispatch(__getComments(param));
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩 중....</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      {comments &&
        comments.map((comment, index) =>
          comment.isDone === false ? (
            <StComments key={comment.id}>
              {comment.useName} - {comment.comment}
              <Button
                type="button"
                onClick={() => {
                  onChangeDoneHandler(index);
                }}
              >
                수정
              </Button>
              <Button
                type="button"
                onClick={() => {
                  onClickDeleteButton(comment.id);
                }}
              >
                삭제
              </Button>
            </StComments>
          ) : (
            <StComments key={comment.id}>
              {comment.useName} -
              <input
                type="text"
                style={{ padding: "6px" }}
                onChange={(event) => {
                  setEditComment({ comment: event.target.value });
                }}
              ></input>
              <Button
                type="button"
                onClick={() => {
                  onChangeEditHandler(comment.id, editComment);
                  onChangeDoneHandler(index);
                }}
              >
                확인
              </Button>
              <Button
                type="button"
                onClick={() => {
                  onClickDeleteButton(comment.id);
                }}
              >
                삭제
              </Button>
            </StComments>
          )
        )}
    </div>
  );
};

export default CommentList;

const StComments = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  height: 50px;
  font-size: 20px;
  border: 2px solid var(--color-point1);
  border-radius: 12px;
  margin: 5px 0 5px 30px;
  padding-left: 20px;
`;
