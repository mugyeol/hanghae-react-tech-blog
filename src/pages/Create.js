import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";

import AddPostForm from "../features/post/AddPostForm";

const Container = styled.div`
  margin: 50px auto;
  width: 85%;
  min-width: 500px;
  max-width: 1200px;
`;

const Create = () => {
  return (
    <Layout>
      <Container>
        <AddPostForm />
      </Container>
    </Layout>
  );
};

export default Create;
