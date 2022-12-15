import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <StLayout>{children}</StLayout>
      <Footer />
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const StLayout = styled.div`
  margin: 0 auto;
  width: 1000px;
  min-width: 800px;
  flex: 1;
`;
