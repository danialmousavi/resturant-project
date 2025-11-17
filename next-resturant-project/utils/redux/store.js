"use client"
const { configureStore } = require("@reduxjs/toolkit");
const { cartReducer } = require("./slices/cartSlice");

export const store=configureStore({
    reducer:{
        shoppingCart:cartReducer
    }
})