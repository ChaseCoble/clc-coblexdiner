import { createSlice } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';
import { CookieStorage } from "redux-persist-cookie-storage";
import Cookies from 'cookies-js'

export const cartSlice = createSlice({
    name: "cartSlice",
    initialState: {
        cartItems: [],
        amount: 0,
        total: 0,
        isLoading: true            
    }
})

const persistConfig = {
    key: 'root',
    storage: new CookieStorage(Cookies)
}

const persistedCartReducer = persistReducer(persistConfig, cartSlice.reducer);

export default persistedCartReducer;