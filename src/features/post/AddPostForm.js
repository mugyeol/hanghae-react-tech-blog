import React, { useEffect } from "react";
import styled from "styled-components";
import Button from "../../elem/Button";
import { useState } from "react";
import axios from "axios";
import MarkdownRenderer from "../comment/MarkdownRerder";
import { useParams } from "react-router-dom";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 20px;
  padding: 0px 15px;
`;

const TitleContainer = styled.div`
  padding: 15px;
  input {
    color: var(--color-black);
    width: 100%;
    border: none;
    font-size: 22px;
    border-bottom: solid 3px var(--color-point1);
    font-weight: 800;
    padding-bottom: 15px;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: var(--color-point1);
    }
  }
`;

const TagContainer = styled.div`
  display: flex;
  padding: 12px 15px 15px 15px;
  span {
    color: var(--color-point2);
    font-size: 18px;
    font-weight: 800;
  }
  input {
    color: var(--color-point2);
    flex: 1;
    border: none;
    font-size: 18px;
    font-weight: 800;
    &::placeholder {
      color: var(--color-point2);
    }
  }
`;

const ContentContainer = styled.div`
  padding: 22px 25px 25px 25px;
  border: 2px solid var(--color-point2);
  border-radius: 10px;
  margin: 15px;
  textarea {
    color: var(--color-black);
    width: 100%;
    border: none;
    font-size: 15px;
    font-weight: 800;
    resize: none;
    min-height: 50vh;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: var(--color-point1);
    }
  }
`;

const AddPostForm = () => {
  const { postid } = useParams();
  const [input, setInput] = useState({
    title: "",
    content: "",
    category: "",
  });

  // 수정 내용 받아오기
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `http://localhost:3001/posts?id=${postid}`
      );
      const [selectData] = data;
      setInput({
        title: selectData.title,
        content: selectData.content,
        category: selectData.category,
      });
    };
    fetchData();
  }, [postid]);

  // 버튼으로 추가 및 수정하기
  const onClickHandler = async () => {
    if (input.title === "" || input.content === "") {
      alert("값을 입력해주세요");
    } else {
      if (postid) {
        console.log(input);
        console.log(input.title);
        await axios.patch(`http://localhost:3001/posts/${postid}`, input);
        setInput({
          title: "",
          content: "",
          category: "",
        });
      } else {
        await axios.post("http://localhost:3001/posts", input);
        setInput({
          title: "",
          content: "",
          category: "",
        });
      }
    }
  };

  const onChangeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };
  return (
    <div>
      <ButtonContainer>
        <Button type="button" onClick={onClickHandler}>
          {postid ? "수정하기" : "발행하기"}
        </Button>
      </ButtonContainer>
      <TitleContainer>
        <input
          type="text"
          placeholder="제목을 입력하세요"
          name="title"
          value={input.title}
          onChange={onChangeHandler}
        />
      </TitleContainer>
      <TagContainer>
        <span>#</span>
        <input
          type="text"
          placeholder="태그를 입력하세요"
          name="category"
          value={input.category}
          onChange={onChangeHandler}
        />
        {/* <Button>추가</Button> */}
      </TagContainer>
      <ContentContainer>
        <textarea
          type="text"
          placeholder="마크다운으로 하고 싶은 이야기를 적어보세요"
          name="content"
          value={input.content}
          onChange={onChangeHandler}
        />
      </ContentContainer>
      <ContentContainer>
        <MarkdownRenderer
          markdown={
            input.content === ""
              ? "마크다운이 변환되어 보여집니다"
              : input.content
          }
        />
      </ContentContainer>
    </div>
  );
};

export default AddPostForm;
