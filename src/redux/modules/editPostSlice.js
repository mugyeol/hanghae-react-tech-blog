import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { serverUrl } from ".";

export const __getEditPost = createAsyncThunk(
  "editPost/getEditPost",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(`${serverUrl}/posts?id=${payload}`);
      const [selectData] = data;
      return thunkAPI.fulfillWithValue(selectData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  editPost: {
    title: "",
    content: "",
    category: "",
    date: "",
  },
  isLoading: false,
  error: null,
};

// slice
const editPostSlice = createSlice({
  name: "editPost",
  initialState,
  reducers: {},
  extraReducers: {
    [__getEditPost.pending]: (state) => {
      state.isLoading = true;
    },
    [__getEditPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.editPost = {
        title: action.payload.title,
        content: action.payload.content,
        category: action.payload.category,
        date: action.payload.date,
      };
    },
    [__getEditPost.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const {} = editPostSlice.actions;
export default editPostSlice.reducer;
