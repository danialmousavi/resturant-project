"use server";

import { cookies } from "next/headers";
import { extractErrorMessage } from "../extractErrorMessage";

export default async function LoginAction(values) {
  try {
    const res = await fetch("http://localhost:8000/api/admin-panel/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(values),
    });

    const data = await res.json();

    // درخواست موفق
    if (res.ok) {
      cookies().set({
        name: "Token",
        value: data.data.token,
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60 * 24,
      });

      return {
        success: true,
        data: data.data, // فقط اطلاعات مفید
        message: data.message || "ورود با موفقیت انجام شد",
      };
    }

    // درخواست ناموفق → پیام خطا از backend
    return {
      success: false,
      message: extractErrorMessage(data), // تابع کمکی
      data: null,
    };

  } catch (err) {
    console.log("❌ خطای لاگین:", err);

    return {
      success: false,
      message: "خطایی در ارتباط با سرور رخ داد",
      data: null,
    };
  }
}


export async function me() {
    const token = cookies().get('Token')?.value

    if (!token) {
        return {
            error: 'Not Authorized'
        }
    }

    const res = await fetch("http://localhost:8000/api/admin-panel/auth/me",{
      method:"POST",
      headers:{
        "Authorization":`Bearer ${token}`,
        "Accept":"application/json"
      },
      body:JSON.stringify({})
    })
    const data=await res.json();
    console.log("AUTH ME USER",data);
    
    if (data.status === 'success') {
        return {
            user: data.data
        }
    } else {
        return {
            error: "User Forbidden"
        }
    }

}