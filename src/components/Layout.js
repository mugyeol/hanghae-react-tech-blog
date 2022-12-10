import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <StLayout>{children}</StLayout>
      <Footer />
    </>
  );
};

export default Layout;

const StLayout = styled.div`
  margin: auto;
  width: 1200px;
  min-width: 800px;
`;
