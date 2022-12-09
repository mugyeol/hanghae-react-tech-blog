import { configureStore } from "@reduxjs/toolkit";
/**
 * import 해온 것은 slice.reducer 입니다.
 */
import posts from "../modules/postSlice";
import comments from "../modules/commentSlice";

const store = configureStore({
  reducer: { posts: posts, comments: comments },
});

export default store;
