"use server";

import { cookies } from "next/headers";

export async function getAddresses() {
  const token = cookies().get("Token")?.value;

  // توکن وجود نداشت
  if (!token) {
    return {
      success: false,
      message: "شما هنوز لاگین نکرده‌اید",
      data: null,
    };
  }

  try {
    const res = await fetch("http://localhost:8000/api/user/addresses", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Accept": "application/json",
      },
    });

    const data = await res.json();

    // console.log("dataaaaaaaaaaaaaaaaaaaaaaaaa", data);

    // اگر ساختار پاسخ success باشد
    if (data.status === "success") {
       return data.data
    }

    // اگر سرور پاسخ error داد
    if (data.status === "error") {
      return {
        success: false,
        message: data?.message?.error?.[0] || "خطا در دریافت آدرس‌ها",
        data: null,
      };
    }

    // اگر ساختار غیر استاندارد بود
    return {
      success: false,
      message: "پاسخ نامعتبر از سرور",
      data: null,
    };

  } catch (err) {
    console.log("❌ خطا:", err);

    return {
      success: false,
      message: "خطا در ارتباط با سرور",
      data: null,
    };
  }
}
