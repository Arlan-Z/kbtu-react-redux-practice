import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type Post from "../models/post";
import postService from "../services/postService";

type PostsState = {
  items: Post[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
};

const initialState: PostsState = {
  items: [],
  status: "idle",
  error: null,
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  return postService.getPosts();
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Failed to load posts.";
      });
  },
});

export default postsSlice.reducer;
