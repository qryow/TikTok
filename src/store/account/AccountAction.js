import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from '../../helpers/const';

export const registerUser = createAsyncThunk(
    'account/registerUser',
    async ({ userObj, navigate }) => {
        let formData = new FormData();
        formData.append('email', userObj.email);
        formData.append('name', userObj.name);
        formData.append('password', userObj.password);
        formData.append('password_confirm', userObj.passwordConfirm);
        let { data } = await axios.post(`${API}/account/register`, formData);
        console.log(data);
        return { data, navigate };
    }
);

export const accountActivate = createAsyncThunk(
  'account/accountActivate',
  async ({ userObj, navigate }) => {
      let formData = new FormData();
      formData.append('email', userObj.email);
      formData.append('code', userObj.code);
      let { data } = await axios.post(`${API}/account/activate/`, formData);
      console.log(data);
      return { data, navigate };
  }
);

//export const accountActivate = createAsyncThunk(
//  'account/accountActivate',
//  async ({ userObj, navigate}) => {
//    let formData = new FormData();
//    formData.append('email', userObj.email);
//    formData.append('code', userObj.code);
//    let { data } = await axios.post(`${API}`);
//    console.log(data);
//    return { data, navigate}
//  }
//)

export const loginUser = createAsyncThunk(
    'account/loginUser',
    async ({ userObj, navigate }) => {
        let formData = new FormData();
        formData.append('email', userObj.email);
        formData.append('password', userObj.password);
        let { data } = await axios.post(`${API}/account/login/`, formData);
        return { data, navigate, userEmail: userObj.email };
    }
);