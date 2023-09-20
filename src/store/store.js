import { configureStore } from "@reduxjs/toolkit";
import accountReducer from './account/AccountSlice';

export default configureStore({
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    }),
    reducer: {
        account: accountReducer
    }
});