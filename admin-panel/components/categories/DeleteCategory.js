"use client"
import React from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { DeleteCategoryAction } from "@/utils/actions/Category";
export default function DeleteCategory({id}) {
    const router=useRouter()

    const handleDleteCategory=async()=>{
        console.log(id);
        const result=await DeleteCategoryAction(id);
        if(!result.success){
            toast.error(result.message||"مشکلی پیش آمده است لطفا بعدا تلاش کنید")
        }else{
            router.replace("/categories")
        }
        
    }
  return (
    <>
      <div className="col-4">
        <button className="btn btn-dark mt-3 " onClick={handleDleteCategory}>حذف دسته‌بندی</button>
      </div>
    </>
  );
}
