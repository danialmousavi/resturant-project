"use server";

import { cookies } from "next/headers";

export default async function LoginAction(values) {
  try {
    const res = await fetch("http://localhost:8000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(values),
    });
    // console.log("resssssssssss", res);
    if (res.status == 200) {
      const data = await res.json();
      cookies().set({
        name: "loginToken",
        value: data.data.login_token,
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60 * 24,
      });
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

export async function CheckOtpAction(values) {
  const loginToken = cookies().get("loginToken").value;
  if (!loginToken) {
    return {
      success: false,
      message: "توکن معتبر نیست لطفا مجددا تلاش کنید",
    };
  }
  console.log("loginToken", loginToken);
  console.log("values", values);
  try {
    const res = await fetch("http://localhost:8000/api/auth/check-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        otp: values.otp,
        login_token: loginToken,
      }),
    });
    console.log("resssssssssss", res);
    if (res.status == 200) {
      const data = await res.json();
      console.log("data", data);

        cookies().set({
          name:"Token",
          value:data.data.token,
          httpOnly:true,
          path:"/",
          maxAge:60*60*24
        })
        cookies().delete("loginToken")
      return {
        data: data.data.user,
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
