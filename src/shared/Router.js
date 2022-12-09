import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Detail from "../pages/Detail";
import AddPostForm from "../features/post/AddPostForm";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
const Router = () => {
  return (
    <>
    <Layout>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="/form" element={<AddPostForm />} />
      </Routes>
    </BrowserRouter>
    <Footer/>
    </Layout>
    </>
  );
};

export default Router;
