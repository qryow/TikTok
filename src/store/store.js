import { configureStore } from "@reduxjs/toolkit";
import accountReducer from './account/AccountSlice';
import postsReducer from './posts/postsSlice';

export default configureStore({
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    }),
    reducer: {
        account: accountReducer,
        posts: postsReducer,
    }
});