"use client"
import React from "react";
import { DeleteUserAction } from "@/utils/actions/User";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
export default function DeleteUser({id}) {
    const router=useRouter()

    const handleDleteUser=async()=>{
        console.log(id);
        const result=await DeleteUserAction(id);
        if(!result.success){
            toast.error(result.message||"مشکلی پیش آمده است لطفا بعدا تلاش کنید")
        }else{
            router.replace("/users")
        }
        
    }
  return (
    <>
      <div className="col-4">
        <button className="btn btn-dark mt-3 " onClick={handleDleteUser}>حذف کاربر</button>
      </div>
    </>
  );
}
