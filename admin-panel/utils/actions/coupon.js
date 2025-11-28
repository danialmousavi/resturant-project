"use server";

import { cookies } from "next/headers";
import { extractErrorMessage } from "../extractErrorMessage";
import { revalidatePath } from "next/cache";

export async function DeleteCouponAction(CouponId) {
  try {
    const token = cookies().get("Token")?.value;

    if (!token) {
      return {
        success: false,
        message: "توکن معتبر نیست. لطفاً دوباره وارد شوید.",
      };
    }

    const res = await fetch(`http://localhost:8000/api/admin-panel/coupons/${CouponId}`, {
      method: "DELETE",
      headers: {
        "Accept": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    let data;
    try {
      data = await res.json();
    } catch (e) {
      return {
        success: false,
        message: "پاسخ نامعتبر از سرور دریافت شد.",
      };
    }

    // اگر API صراحتاً خطا فرستاد
    if (data.status === "error") {
      return {
        success: false,
        message: extractErrorMessage(data),
      };
    }

    // اگر HTTP status خطا بود
    if (!res.ok) {
      return {
        success: false,
        message: extractErrorMessage(data),
      };
    }

    // موفقیت
    if (data.status === "success") {
      await revalidatePath("/users");
      return {
        success: true,
        message: "کاربر با موفقیت حذف شد.",
      };
    }

    return {
      success: false,
      message: "پاسخ سرور نامعتبر است.",
    };

  } catch (err) {
    console.log("❌ Error in DeleteUser:", err);
    return {
      success: false,
      message: "خطایی در اتصال به سرور رخ داد.",
    };
  }
}