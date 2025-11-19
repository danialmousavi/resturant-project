"use client"
import { CheckCoupon } from "@/utils/actions/CheckCoupon";
import React, { useState } from "react";
import { toast } from "react-toastify";

export default function Coupon({setOff}) {
    const [coupon,setCoupon]=useState("");
    const handleCheckCoupon=async()=>{
        if(coupon==""){
            toast.error("کد تخفیفی وارد نشده است")
        }else{
              const result=await CheckCoupon(coupon);
              if(result.success){
                toast.success(result.message||"کد تخفیف با موفقیت اعمال شد")
                setOff({code:coupon,percent:result.percentage})
              }else{
                toast.error(result.message||"متاسفیم مشکلی پیش آمده است!")

              }
              console.log(result);
              
        }
    }
  return (
    <div className="col-12 col-md-6">
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="کد تخفیف" onChange={(e)=>setCoupon(e.target.value)}/>
        <button className="input-group-text" id="basic-addon2" onClick={handleCheckCoupon}>
          اعمال کد تخفیف
        </button>
      </div>
    </div>
  );
}
