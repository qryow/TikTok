import { createSlice } from "@reduxjs/toolkit";
import { registerUser, accountActivate, loginUser, changePassword, deleteAccount, forgotPassword, forgotPasswordComplete, getProfile, accountLogout } from './AccountAction';
import { addDataToLocalStorage } from "../../helpers/functions";

const accountSlice = createSlice({
    name: 'account',
    initialState: {
        currentAccount: null,
        status: ''
    },
    reducers: {
        clearCurrentAccount: (state) => {
            state.currentAccount = null;
        },
        clearStatus: (state) => {
            state.status = '';
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(registerUser.fulfilled, (_, action) => {
            action.payload.navigate('/activate');
        })
        .addCase(registerUser.rejected, (state) => {
            state.status = 'error';
        })
        .addCase(accountActivate.fulfilled, (_, action) => {
          action.payload.navigate('/login');
        })
        .addCase(accountActivate.rejected, (state) => {
          state.status = 'error';
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.currentAccount = action.payload.userEmail;
            addDataToLocalStorage(action.payload.userEmail, action.payload.data);
            action.payload.navigate('/');
        })
        .addCase(loginUser.rejected, (state) => {
            state.status = 'error';
        })
        .addCase(changePassword.fulfilled, (_, action) => {
          action.payload.navigate('/')
        })
        .addCase(changePassword.rejected, (state) => {
          state.status = 'error'
        })
        .addCase(deleteAccount.fulfilled, (_, action) => {
          action.payload.navigate('/')
        })
        .addCase(deleteAccount.rejected, (state) => {
          state.status = 'error'
        })
        .addCase(accountLogout.fulfilled, (_, action) => {
          action.payload.navigate('/')
        })
        .addCase(accountLogout.rejected, (state) => {
          state.status = 'error'
        })
        .addCase(forgotPassword.fulfilled, (_, action) => {
          action.payload.navigate('/')
        })
        .addCase(forgotPassword.rejected, (state) => {
          state.status = 'error'
        })
        .addCase(forgotPasswordComplete.fulfilled, (_, action) => {
          action.payload.navigate('/change-password-complete')
        })
        .addCase(forgotPasswordComplete.rejected, (state) => {
          state.status = 'error'
        })
        .addCase(getProfile.fulfilled, (state, action) => {
          state.currentAccount = action.payload;
          console.log(action.payload);
        })
    }
});

export const { clearCurrentAccount, clearStatus } = accountSlice.actions;
export default accountSlice.reducer;