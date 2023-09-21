import { createSlice } from "@reduxjs/toolkit";
import { registerUser, accountActivate, loginUser } from './AccountAction';
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
    }
});

export const { clearCurrentAccount, clearStatus } = accountSlice.actions;
export default accountSlice.reducer;