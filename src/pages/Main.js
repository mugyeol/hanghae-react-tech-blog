import React from "react";
import Stack from "../elem/Stack";
import PostList from "../features/post/PostList";
import Profile from "../features/profile/Profile";
import Layout from "../components/Layout";

const Main = () => {
  return (
    <Layout>
      <Profile isMain={true} />
      <PostList/>
      
    </Layout>
  );
};

export default Main;
