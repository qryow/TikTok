import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from '../../helpers/const'
import { getAuthConfig } from "../../helpers/functions";

export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async (_, { getState }) => {
    const config = getAuthConfig();
    const { data } = await axios.get(`${API}/posts/`, config ? config : null)
    console.log(data);
    return data;
  }
)

export const getOnePost = createAsyncThunk(
  'posts/getOnePost',
  async ({ id }) => {
    const config = getAuthConfig();
    const { data } = await axios.get(`${API}/post/${id}`, config ? config : null);
    return data;
  }
)

export const CreatePost = createAsyncThunk(
  'posts/createPosts',
  async ({ post, navigate }, { dispatch }) => {
    const config = getAuthConfig();
    const newProduct = new FormData();
    newProduct.append('title', post.title);
    newProduct.append('description', post.description);
    newProduct.append('categories', post.categories);
    newProduct.append('file_video', post.file_video);
    const { data } = await axios.post(`${API}/posts/`, newProduct, config ? config : null );
    dispatch(getPosts());
    console.log(data);
    return {data, navigate}
  }
)

export const likePost = createAsyncThunk(
  'posts/likePost',
  async (id, { dispatch }) => {
    console.log('Received id in likePost:', id);
    const config = getAuthConfig();
    const { data } = await axios.post(`${API}/posts/${id}/like/`, {}, config ? config : null)
    dispatch(getPosts());
    return {data};
  }
)