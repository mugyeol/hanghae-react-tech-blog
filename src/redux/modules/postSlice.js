import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { act } from "react-dom/test-utils";
import { serverUrl } from ".";

export const __getPosts = createAsyncThunk(
  "getPosts",
  async (payload, thunkAPI) => {
    try {
      //promise 객체에서 data 추출 ?
      const { data } = await axios.get(`${serverUrl}/posts`);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const __getPostsByCategory = createAsyncThunk(
  "getPostsByCategory",
  async (arg, thunkAPI) => {
    try {
      //promise 객체에서 data 추출 ?
      const { data } = await axios.get(`${serverUrl}/posts?category=${arg}`);
      console.log("data", data);
      const object = {
        category: arg,
        list: data,
      };
      return thunkAPI.fulfillWithValue(object);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  posts: { list: [], categories: [] },
  isLoading: false,
  error: null,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [__getPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [__getPosts.fulfilled]: (state, action) => {
      let arr = [];
      action.payload.forEach((post) => {
        arr.push(post.category);
      });
      arr = [...new Set(arr)];
      const arr2 = [];
      arr.forEach((ctgr, index) => {
        const object = { id: index + 1, ctgr: ctgr, isActive: false };
        arr2.push(object);
      });
      state.posts.categories = [
        { id: 0, ctgr: "All", isActive: true },
        ...arr2,
      ];

      state.isLoading = false;
      state.posts.list = action.payload;
    },
    [__getPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__getPostsByCategory.pending]: (state) => {
      state.isLoading = true;
    },
    [__getPostsByCategory.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts.list = action.payload.list;

      console.log("action",action.payload)
      const arr = [...state.posts.categories];
      arr.forEach((ctgr, index) => {
        ctgr.ctgr === action.payload.category
          ? (arr[index].isActive = true)
          : (arr[index].isActive = false);
      });
      state.posts.categories = arr;
    },
    [__getPostsByCategory.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = postSlice.actions;

export default postSlice.reducer;
