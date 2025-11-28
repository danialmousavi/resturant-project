"use client"
import React from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { DeleteCouponAction } from "@/utils/actions/coupon";
export default function DeleteCoupon({id}) {
    const router=useRouter()

    const handleDleteCoupon=async()=>{
        console.log(id);
        const result=await DeleteCouponAction(id);
        if(!result.success){
            toast.error(result.message||"مشکلی پیش آمده است لطفا بعدا تلاش کنید")
        }else{
            router.replace("/coupons")
        }
        
    }
  return (
    <>
      <div className="col-4">
        <button className="btn btn-dark mt-3 " onClick={handleDleteCoupon}>حذف کد تخفیف</button>
      </div>
    </>
  );
}
