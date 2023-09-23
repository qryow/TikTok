import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from '../../helpers/const'
import { getAuthConfig } from "../../helpers/functions";

export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async (_, { getState }) => {
    const config = getAuthConfig();
    const { data } = await axios.get(`${API}/post/`, config ? config : null)
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
    const { data } = await axios.post(`${API}`, newProduct, config ? config : null );
    dispatch(getPosts());
    return {data, navigate}
  }
)