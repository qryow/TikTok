import { createSlice } from "@reduxjs/toolkit";
import { getPosts, CreatePost, } from "./postsActions";

const PostsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    loading: false,
    search: ''
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getPosts.pending, (state) => {
      state.loading = true;
    })
    .addCase(getPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    })
    .addCase(getPosts.rejected, (state) => {
      state.loading = false
    })
    .addCase(CreatePost.fulfilled, (_, action) => {
      action.payload.navigate(`/`)
    })
  }
})

export default PostsSlice.reducer;