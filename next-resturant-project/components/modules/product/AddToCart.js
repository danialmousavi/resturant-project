"use client"
import { addToCart, removeFromCart } from "@/utils/redux/slices/cartSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

export default function AddToCart({product}) {
    const [quantity,setQuantity]=useState(1);
    const dispatch=useDispatch()
    const handleAddToCart=()=>{
        dispatch(removeFromCart(product.id));
        dispatch(addToCart({product,qty:quantity}));
        toast.success("محصول با موفقیت به سبد خرید شما اضافه شد")
    }
  return (
    <div className="mt-5 d-flex">
      <button className="btn-add" onClick={handleAddToCart}>افزودن به سبد خرید</button>
      <div className="input-counter ms-4">
        <span className="plus-btn" onClick={()=>quantity<product.quantity&&setQuantity(prev=>prev+1)}>+</span>

        <div className="input-number">{quantity}</div>
        <span className="minus-btn"onClick={()=>quantity>1&&setQuantity(prev=>prev-1)}>-</span>
      </div>
    </div>
  );
}
