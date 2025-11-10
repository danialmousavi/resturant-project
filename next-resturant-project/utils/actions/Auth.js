"use server";

import { cookies } from "next/headers";

export default async function LoginAction(values) {
  try {
    const res = await fetch("http://localhost:8000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "accept":"application/json"
      },
      body: JSON.stringify(values),
    });
    console.log("resssssssssss", res);
    if (res.status == 200) {
        const data=await res.json();
        console.log("dataaaaaaaaaaa",data);
        cookies().set({
          name:"loginToken",
          value:data.data.login_token,
          httpOnly:true,
          path:"/"
        })
              return {
        data,
        success: true,
      };
    } else {
      return { success: false };
    }
  } catch (err) {
    console.log("❌ خطا:", err);
    return { success: false };
  }
}
