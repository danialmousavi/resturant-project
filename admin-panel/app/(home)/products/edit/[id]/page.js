import EditProduct from '@/components/products/Edit';
import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';
import React from 'react'

export default async function page({params}) {
        const token=cookies().get("Token").value
        const res=await fetch(`http://localhost:8000/api/admin-panel/products/${params.id}`,{
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
        const product=data.data;
        const Res = await fetch("http://localhost:8000/api/admin-panel/categories",{
        method:"GET",
        headers:{
            "Accept":"application/json",
            "Authorization":`Bearer ${token}`
        }
    })
    const Data=await Res.json();
    // console.log("dataaaaaaaaaaaaaaaaaaaaaaaaaa",data);
    const categories=Data?.data?.categories||[];
    console.log(categories);
  return (
    <>
    <EditProduct product={product} categories={categories}/>
    </>
  )
}
