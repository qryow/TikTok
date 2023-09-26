import { createAsyncThunk, createNextState } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from '../../helpers/const';
import { getAuthConfig } from "../../helpers/functions";




export const registerUser = createAsyncThunk(
    'account/registerUser',
    async ({ userObj, navigate }) => {
        let formData = new FormData();
        formData.append('email', userObj.email);
        formData.append('name', userObj.name);
        formData.append('password', userObj.password);
        formData.append('password_confirm', userObj.passwordConfirm);
        let { data } = await axios.post(`${API}/account/register/`, formData);
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
      return { data, navigate };
  }
);

export const changePassword = createAsyncThunk(
  'account/changePassword',
  async ({ userObj, navigate }) => {
      let formData = new FormData();
      const config = getAuthConfig();
      formData.append('old_password', userObj.old_password);
      formData.append('new_password', userObj.new_password);
      formData.append('new_password_confirm', userObj.new_password_confirm);
      let { data } = await axios.post(`${API}/account/change_password/`, formData, config);
      return { data, navigate };
  }
);

export const accountLogout = createAsyncThunk(
  'account/accountLogout',
  async ({ userObj, navigate }) => {
      const config = getAuthConfig();
      let { data } = await axios.post(`${API}/account/logout/`, {}, config);
      localStorage.removeItem('token');
      localStorage.removeItem('account');
      return { data, navigate };
  }
);

export const deleteAccount = createAsyncThunk(
  'account/deleteAccount',
  async ({ userObj, navigate }) => {
      let formData = new FormData();
      const config = getAuthConfig();
      formData.append('email', userObj.email);
      formData.append('password', userObj.password);;
      let { data } = await axios.post(`${API}/account/delete_account/`, formData, config);
      localStorage.removeItem('token');
      localStorage.removeItem('account');
      return { data, navigate };
  }
);

export const forgotPassword = createAsyncThunk(
  'account/forgotPassword',
  async ({ userObj, navigate }) => {
      let formData = new FormData();
      formData.append('email', userObj.email);
      let { data } = await axios.post(`${API}/account/forgot_password/`, formData);
      return { data, navigate };
  }
);

export const forgotPasswordComplete = createAsyncThunk(
  'account/forgotPasswordComplete',
  async ({ userObj, navigate }) => {
      let formData = new FormData();
      formData.append('code', userObj.code);
      formData.append('password', userObj.password);
      formData.append('password_confirm', userObj.password_confirm);
      let { data } = await axios.post(`${API}/account/forgot_password/complete/`, formData);
      return { data, navigate };
  }
);


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


export const getProfile = createAsyncThunk(
  'account/getProfile',
  async () => {
    const config = getAuthConfig();
    const email = JSON.parse(localStorage.getItem('account'));
      const { data } = await axios.get(`${API}/account/profile/${email}`, config ? config : null);
      return data;
  }
)

export const editProfile = createAsyncThunk(
  'account/editProfile',
  async ({ profile }, {dispatch}) => {
    const config = getAuthConfig();
    const updatedProfile = new FormData();
    updatedProfile.append('name', profile.name);
    if(typeof(profile.avatar) === 'object') {
      updatedProfile.append('avatar', profile.avatar);
  };
    updatedProfile.append('description', profile.description);
    const { data } = await axios.patch(`${API}/account/upload_profile/`, updatedProfile, config);
    dispatch(getProfile());
    return data;
  }
)