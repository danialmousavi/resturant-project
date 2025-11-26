"use client"
import React from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { DeleteProductAction } from "@/utils/actions/Product";
export default function DeleteProduct({id}) {
    const router=useRouter()

    const handleDleteProduct=async()=>{
        console.log(id);
        const result=await DeleteProductAction(id);
        console.log(result);
        
        if(!result.success){
            toast.error(result.message||"مشکلی پیش آمده است لطفا بعدا تلاش کنید")
        }else{
            router.replace("/products")
        }
        
    }
  return (
    <>
      <div className="col-4">
        <button className="btn btn-dark mt-3 " onClick={handleDleteProduct}>حذف محصول</button>
      </div>
    </>
  );
}
