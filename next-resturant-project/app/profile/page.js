import EditForm from "@/components/profile/info/EditForm";
import { cookies } from "next/headers";
import React from "react";

export default async function ProfilePage() {
  let user = null;
  let error = null;

  try {
    const token = cookies().get("Token")?.value;

    if (!token) {
      throw new Error("توکن پیدا نشد. لطفا وارد شوید.");
    }

    const res = await fetch("http://localhost:8000/api/profile/info", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store", // جلوگیری از کش شدن داده‌ها
    });

    if (!res.ok) {
      if (res.status === 401) throw new Error("شما اجازه دسترسی ندارید.");
      else throw new Error("خطا در دریافت اطلاعات کاربر.");
    }

    const data = await res.json();
    user = data.data;
  } catch (err) {
    error = err.message || "خطای نامشخصی رخ داد.";
  }

  if (error) {
    return (
      <div className="vh-70">
        <p className="text-danger alert alert-warning">{error}</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="vh-70">
        <p>اطلاعات کاربر یافت نشد.</p>
      </div>
    );
  }

  return (
    <div className="vh-70">
        <EditForm  user={user}/>
    </div>
  );
}
