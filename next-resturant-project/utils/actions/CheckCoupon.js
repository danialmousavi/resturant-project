"use server"

import { cookies } from "next/headers";

export async function CheckCoupon(value) {
  const token = cookies().get("Token")?.value;

  if (!token) {
    return {
      success: false,
      message: "شما هنوز لاگین نکرده‌اید",
    };
  }

  try {
    const res = await fetch("http://localhost:8000/api/check-coupon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({ code: value }),
    });

    const data = await res.json();

    // حالت موفق
    if (data.status === "success") {
      return {
        success: true,
        message: "کد تخفیف اعمال شد",
        percentage: data?.data?.percentage ?? null,
      };
    }

    // حالت خطا (گرفتن پیام خطا از سرور)
    if (data.status === "error") {
      return {
        success: false,
        message: data?.message?.error?.[0] || "خطایی رخ داده است",
      };
    }

    // اگر فرمت داده عجیب بود
    return {
      success: false,
      message: "پاسخ نامعتبر از سرور",
    };

  } catch (err) {
    console.log("❌ خطا:", err);
    return {
      success: false,
      message: "خطا در ارتباط با سرور",
    };
  }
}
