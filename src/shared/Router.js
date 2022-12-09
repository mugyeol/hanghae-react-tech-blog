import React from 'react'
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Main from "../pages/Main"
import Detail from "../pages/Detail"
import AddPostForm from "../features/post/AddPostForm"
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="/form" element={<AddPostForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
