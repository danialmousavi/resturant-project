import CreateProduct from "@/components/products/Create";
import { cookies } from "next/headers";

export default async function CreateProductPage() {
    const token= cookies().get("Token").value
    const res = await fetch("http://localhost:8000/api/admin-panel/categories",{
        method:"GET",
        headers:{
            "Accept":"application/json",
            "Authorization":`Bearer ${token}`
        }
    })
    const data=await res.json();
    // console.log("dataaaaaaaaaaaaaaaaaaaaaaaaaa",data);
    const categories=data?.data?.categories||[];
    console.log(categories);
    
    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h4 className="fw-bold">ایجاد محصول</h4>
            </div>

            <CreateProduct categories={categories} />
        </>
    )
}