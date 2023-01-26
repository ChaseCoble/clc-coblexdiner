import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import { combineReducers } from "@reduxjs/toolkit";
import persistedCartReducer from "./features/cartSlice";
import menuSlice from "./features/menuSlice";
import chatbotSlice from "./features/chatbotSlice";


rootReducer = combineReducers({persistedCartReducer, menuSlice, chatbotSlice})

export default configureStore({
    reducer: {rootReducer},
    
});
