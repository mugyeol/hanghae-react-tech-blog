import { configureStore } from "@reduxjs/toolkit";
/**
 * import 해온 것은 slice.reducer 입니다.
 */
import posts from "../modules/postSlice";
import comments from "../modules/commentSlice";
import editPost from "../modules/editPostSlice";
import detailmainPost from "../modules/detailmainSlice";

const store = configureStore({
  reducer: {
    posts: posts,
    comments: comments,
    editPost: editPost,
    detailmainPost: detailmainPost,
  },
});

export default store;
