import React from "react";
import styled from "styled-components";
import Button from "../../elem/Button";

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
    border-bottom: solid 3px var(--color-point2);
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
  input {
    color: var(--color-black);
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
  margin-top: 10px;
  padding: 12px 15px 15px 15px;
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
  return (
    <div>
      <ButtonContainer>
        <Button>발행하기</Button>
      </ButtonContainer>
      <TitleContainer>
        <input type="text" placeholder="제목을 입력하세요" />
      </TitleContainer>
      <TagContainer>
        <input type="text" placeholder="태그를 입력하세요" />
        <Button>추가</Button>
      </TagContainer>
      <ContentContainer>
        <textarea type="text" placeholder="하고 싶은 이야기를 적어보세요" />
      </ContentContainer>
    </div>
  );
};

export default AddPostForm;
