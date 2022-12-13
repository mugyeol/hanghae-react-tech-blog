import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Detail = () => {
  // const [comment, setComment] = useState({
  //   id: 0,
  //   useName: "",
  //   comment: "",
  // });

  const [comments, setComments] = useState("");
  const fetchComments = async () => {
    const { data } = await axios.get("http://localhost:3001/comments");
    setComments(data);
  };

  // const [addName, setAddName] = useState({ comment: "" });
  const [addComment, setAddComment] = useState({
    useName: "",
    comment: "",
  });
  const onClickAddButton = (comment) => {
    console.log(comment);
    axios.post("http://localhost:3001/comments", comment);
    setAddComment({
      useName: "",
      comment: "",
    });
    setComments([...comments, comment]);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <Stcontainer>
      <Category>카테고리</Category>
      <Title>제목</Title>
      <Stbody>글작성내용</Stbody>
      <Stimage>작성자이미지, 이름, 깃허브</Stimage>
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
        <Stbutton
          type="button"
          onClick={() => {
            onClickAddButton(addComment);
          }}
        >
          댓글작성
        </Stbutton>
      </StComment>
      {comments &&
        comments.map((comment) => (
          <StComments key={comment.id}>
            {comment.useName} - {comment.comment}
            <UpdateButton>수정</UpdateButton>
            <DeleteButton>삭제</DeleteButton>
          </StComments>
        ))}
    </Stcontainer>
  );
};

export default Detail;
const Stcontainer = styled.div``;
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
const Stimage = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  height: 100px;
  font-size: 20px;
  border: 2px solid #323232;
  border-radius: 12px;
  justify-content: center;
  margin: 15px 0 20px 30px;
`;
const StComment = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  height: 100px;
  font-size: 20px;
  margin: 15px 0;
`;
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
const StCommentInput = styled.input`
  width: 70%;
  padding: 10px 10px;
  margin: 15px 0 20px 5px;
  box-sizing: border-box;
  border: solid 2px #323232;
  border-radius: 8px;
`;
const Stbutton = styled.button`
  background-color: #323232;
  color: white;
  width: 150px;
  padding: 10px 10px;
  margin: 15px 0 20px 10px;
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

const StUserName = styled.input`
  width: 20%;
  padding: 10px 10px;
  margin: 15px 0 20px 30px;
  box-sizing: border-box;
  border: solid 2px #323232;
  border-radius: 8px;
`;
