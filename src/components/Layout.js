import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <StLayout>
      <Header />
      {children}
      <Footer />
    </StLayout>
  );
};

export default Layout;

const StLayout = styled.div`
  width: 1200px;
  min-width: 800px;
`;
