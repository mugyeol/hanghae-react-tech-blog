import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Detail from "../pages/Detail";
import Create from "../pages/Create";
import Layout from "../components/Layout";
const Router = () => {
  return (
    <>
      {/* <Layout> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/post/:param" element={<Detail />} />
          <Route path="/form" element={<Create />} />
          <Route path="/form/:postid" element={<Create />} />
        </Routes>
      </BrowserRouter>
      {/* </Layout> */}
    </>
  );
};

export default Router;
