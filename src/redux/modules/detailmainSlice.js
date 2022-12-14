import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { serverUrl } from ".";

export const __getDetailmain = createAsyncThunk(
  "detailmainPost/getDetailmain",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(`${serverUrl}/posts/${payload}`);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  detailmainPost: {
    title: "",
    category: "",
    content: "",
    date: "",
  },
  isLoading: false,
  error: null,
};

//slice
const detailmainSlice = createSlice({
  name: "detailmainPost",
  initialState,
  reducers: {},
  extraReducers: {
    [__getDetailmain.pending]: (state) => {
      state.isLoading = true;
    },
    [__getDetailmain.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.detailmainPost = {
        title: action.payload.title,
        content: action.payload.content,
        category: action.payload.category,
        date: action.payload.date,
      };
    },
    [__getDetailmain.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const {} = detailmainSlice.actions;
export default detailmainSlice.reducer;
