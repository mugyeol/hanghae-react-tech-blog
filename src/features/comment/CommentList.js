import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Button from "../../elem/Button";

const CommentList = () => {
  const [comments, setComments] = useState("");

  const fetchComments = async () => {
    const { data } = await axios.get("http://localhost:3001/comments");
    setComments(data);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const onClickDeleteButton = (commentId) => {
    axios.delete(`http://localhost:3001/comments/${commentId}`);
  };
  const onChangeDoneHandler = (index) => {
    const arr = [...comments];
    arr[index].isDone = !arr[index].isDone;
    setComments(arr);
  };

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
              <input style={{ padding: "6px" }} value={comment.comment}></input>
              <Button
                onClick={() => {
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
      {/* {comments &&
        comments.map((comment) => (
          <StComments key={comment.id}>
            {comment.useName} -{" "}
            <input style={{ padding: "6px" }} value={comment.comment}></input>
            <UpdateButton>수정</UpdateButton>
            <DeleteButton
              type="button"
              onClick={() => {
                onClickDeleteButton(comment.id);
              }}
            >
              삭제
            </DeleteButton>
          </StComments>
        ))} */}
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
  border: 2px solid #323232;
  border-radius: 12px;
  margin: 5px 0 5px 30px;
  padding-left: 20px;
`;

const UpdateButton = styled.button`
  background-color: #415c5a;
  color: white;
  width: 50px;
  padding: 5px;
  margin: 20px 0 20px 10px;
`;

const DeleteButton = styled.button`
  background-color: #f6c69e;
  color: black;
  width: 50px;
  padding: 5px;
  margin: 20px 0 20px 10px;
`;
