import React from "react";

import EditUser from "@/components/users/EditUser";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";

export default async function Page({params}) {
    // start get user data
    const token=cookies().get("Token").value
    const res=await fetch(`http://localhost:8000/api/admin-panel/users/${params.id}`,{
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
    const user=data.data;
    // end get user data

  return (
    <>
        <EditUser user={user}/>
    </>
  );
}
