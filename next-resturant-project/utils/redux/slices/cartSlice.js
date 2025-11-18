"use client"
import { createSlice } from "@reduxjs/toolkit";
const initialState={
    cart:[]
}
export const cartSlice=createSlice({
    name:"Cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            // console.log(state,action);
            const {product,qty}=action.payload
            state.cart=[...state.cart,{...product,qty:qty}]
            console.log(state.cart);
            
        },
        removeFromCart:(state,action)=>{
            console.log(action);
            state.cart=state.cart.filter(p=>p.id!==action.payload)
        }
    }
})
export const {addToCart,removeFromCart}=cartSlice.actions
export const cartReducer=cartSlice.reducer