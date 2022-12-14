import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { serverUrl } from ".";

const initialState = {
  comments: [],
  isLoading: false,
  error: null,
  // isDone: false,
};

// __getComments : 댓글 불러오기
export const __getComments = createAsyncThunk(
  "comments/getComments",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(`${serverUrl}/comments`);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// __addComment : 댓글 추가
export const __addComment = createAsyncThunk(
  "comment/addComment",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post(`${serverUrl}/comments`, payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
// __deleteComment : 댓글 삭제
export const __deleteComment = createAsyncThunk(
  "comment/deleteComment",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.delete(`${serverUrl}/comments/${payload}`);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
// __editCommnet : 댓글 수정
export const __editComment = createAsyncThunk(
  "comment/editComment",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.patch(
        `${serverUrl}/comments/${payload[0]}`,
        payload[1]
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    changeIsDone: (state, action) => {
      state = [...state];
      state[action.payload].isDone = !state[action.payload].isDone;
    },
  },
  extraReducers: {
    // __getComments : 댓글 불러오기
    [__getComments.pending]: (state) => {
      state.isLoading = true;
    },
    [__getComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = action.payload;
    },
    [__getComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // __addComment : 댓글 추가
    [__addComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__addComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = [...state.comments, action.payload];
    },
    [__addComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // __deleteComment : 댓글 삭제
    [__deleteComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__addComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = [...state.comments].filter((comments) => {
        return comments.id != action.payload;
      });
    },
    [__deleteComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // __editComment : 댓글 수정
    [__editComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__editComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = action.payload;
    },
    [__editComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export const { changeIsDone } = commentSlice.actions;

export default commentSlice.reducer;
