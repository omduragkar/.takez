import { configureStore } from "@reduxjs/toolkit";
import LoadingReducers from "./reducers/LoadingReducers";
import notesReducers from "./reducers/notesReducers";
import userReducer from "./reducers/userReducers";

const store = configureStore({
    reducer:{
        userInfo:userReducer,
        loader:LoadingReducers
    }
})


export default store;