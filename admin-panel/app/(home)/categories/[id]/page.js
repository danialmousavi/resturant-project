import DeleteCategory from "@/components/categories/DeleteCategory";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import React from "react";

export default async function page({ params }) {
    const token=cookies().get("Token").value
    const res=await fetch(`http://localhost:8000/api/admin-panel/categories/${params.id}`,{
        method:"GET",
        headers:{
            "accept":"application/json",
            "Authorization":`Bearer ${token}`
        }
    });
    const data=await res.json();
    if(data.status!="success"){
        return notFound();
    }
    const category=data.data;
    // console.log(data);
    
  return (
    <>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h4 className="fw-bold">دسته بندی : {category.name}</h4>
            </div>

            <div className="row gy-4">
                <div className="col-md-3">
                    <label className="form-label">نام</label>
                    <input type="text" className="form-control" disabled placeholder={category.name} />
                </div>
                <div className="col-md-3">
                    <label className="form-label">توضیحات</label>
                    <input type="text" className="form-control" disabled placeholder={category.description} />
                </div>
            </div>
        <DeleteCategory id={category.id} />
    </>
  );
}
