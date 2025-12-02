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
export async function CreateCoupon(values) {
  try {
    const token = cookies().get("Token")?.value;

    // اگر توکن نبود
    if (!token) {
      return {
        success: false,
        message: "توکن معتبر نیست. لطفاً دوباره وارد شوید.",
      };
    }

    const res = await fetch("http://localhost:8000/api/admin-panel/coupons", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(values),
    });

    let data;

    try {
      data = await res.json();
      console.log("dataaaaaaaaaaaaaaaaaaaaaaaaaaaa",data);
      
    } catch (e) {
      return {
        success: false,
        message: "پاسخ نامعتبر از سرور دریافت شد.",
      };
    }

    // اگر API با status:error برگشت
    if (data.status === "error") {
      return {
        success: false,
        message: extractErrorMessage(data),
      };
    }

    // حالت موفق
    if (data.status === "success") {
      await revalidatePath("/coupons");

      return {
        success: true,
        message: "کد تخفیف با موفقیت ایجاد شد",
      };
    }

    // fallback
    return {
      success: false,
      message: "پاسخ سرور نامعتبر است.",
    };

  } catch (err) {
    console.log("❌ Error in CreateUser:", err);

    return {
      success: false,
      message: "خطایی در اتصال به سرور رخ داد.",
    };
  }
}
export async function EditCouponAction(Id, values) {
  try {
    const token = cookies().get("Token")?.value;

    if (!token) {
      return {
        success: false,
        message: "توکن معتبر نیست. لطفاً دوباره وارد شوید.",
      };
    }

    const res = await fetch(`http://localhost:8000/api/admin-panel/coupons/${Id}`, {
      method: "PUT", // اگر API شما PATCH است اطلاع بده
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(values),
    });

    let data;

    try {
      data = await res.json();
      // console.log("dataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",data);
      
    } catch (e) {
      return {
        success: false,
        message: "پاسخ نامعتبر از سرور دریافت شد.",
      };
    }

    // خطاهای API
    if (data.status === "error") {
      return {
        success: false,
        message: extractErrorMessage(data),
      };
    }


    // موفقیت
    if (data.status === "success") {
      await revalidatePath("/coupons");
      return {
        success: true,
        message: "کد تخفیف با موفقیت ویرایش شد",
      };
    }

    return {
      success: false,
      message: "پاسخ سرور نامعتبر است.",
    };

  } catch (err) {
    console.log("❌ Error in EditUser:", err);
    return {
      success: false,
      message: "خطایی در اتصال به سرور رخ داد.",
    };
  }
}