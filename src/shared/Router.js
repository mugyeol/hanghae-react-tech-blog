import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Detail from "../pages/Detail";
import AddPostForm from "../features/post/AddPostForm";
import Layout from "../components/Layout";
const Router = () => {
  return (
    <>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/post/:id" element={<Detail />} />
            <Route path="/form" element={<AddPostForm />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </>
  );
};

export default Router;
