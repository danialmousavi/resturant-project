"use server";

import { cookies } from "next/headers";
import { extractErrorMessage } from "../extractErrorMessage";
import { revalidatePath } from "next/cache";

export async function createProductAction(values) {
  try {
    const token = cookies().get("Token")?.value;

    // اگر توکن نبود
    if (!token) {
      return {
        success: false,
        message: "توکن معتبر نیست. لطفاً دوباره وارد شوید.",
      };
    }

    const res = await fetch("http://localhost:8000/api/admin-panel/products", {
      method: "POST",
      headers: {
        // "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body:values,
    });

    let data;

    try {
      data = await res.json();
      console.log("data",data);
      
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
      await revalidatePath("/products");

      return {
        success: true,
        message: "محصول با موفقیت ایجاد شد",
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

export async function DeleteProductAction(userId) {
  try {
    const token = cookies().get("Token")?.value;

    if (!token) {
      return {
        success: false,
        message: "توکن معتبر نیست. لطفاً دوباره وارد شوید.",
      };
    }

    const res = await fetch(`http://localhost:8000/api/admin-panel/products/${userId}`, {
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
        message:"محصول با موفقیت حذف شد",
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

export async function editProductAction(id, values) {
  try {
    const token = cookies().get("Token")?.value;

    if (!token) {
      return {
        success: false,
        message: "توکن معتبر نیست. لطفاً دوباره وارد شوید.",
      };
    }

    const res = await fetch(`http://localhost:8000/api/admin-panel/products/${id}`, {
      method: "POST", // یا "PATCH" بسته به API سرور
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: values, // FormData
    });

    let data;
    try {
      data = await res.json();
      console.log("data", data);
    } catch (e) {
      return {
        success: false,
        message: "پاسخ نامعتبر از سرور دریافت شد.",
      };
    }

    if (data.status === "error") {
      return {
        success: false,
        message: extractErrorMessage(data),
      };
    }

    if (data.status === "success") {
      await revalidatePath("/products"); // مسیر صفحه لیست محصولات

      return {
        success: true,
        message: "محصول با موفقیت ویرایش شد",
      };
    }

    return {
      success: false,
      message: "پاسخ سرور نامعتبر است.",
    };
  } catch (err) {
    console.log("❌ Error in editProductAction:", err);
    return {
      success: false,
      message: "خطایی در اتصال به سرور رخ داد.",
    };
  }
}
