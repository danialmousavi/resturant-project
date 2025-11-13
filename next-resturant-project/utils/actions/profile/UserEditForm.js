"use server";
import { cookies } from "next/headers";

export default async function UserEditForm(values) {
  const loginToken = cookies().get("Token")?.value;

  if (!loginToken) {
    return {
      success: false,
      message: "توکن معتبر نیست لطفا مجددا تلاش کنید.",
    };
  }

  try {
    const res = await fetch("http://localhost:8000/api/profile/info/edit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${loginToken}`,
      },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
      }),
    });

    const data = await res.json();

    // ✅ موفقیت
    if (data.status === "success") {
      return {
        success: true,
        message: "اطلاعات شما با موفقیت ویرایش شد.",
      };
    }

    // ❌ اگر خطا بود (و message یک object شامل چند خطاست)
    let errorMsg = "خطایی رخ داده است.";

    if (typeof data.message === "object" && data.message !== null) {
      // مثال: { email: ['ایمیل تکراری است'], name: ['نام الزامی است'] }
      errorMsg = Object.values(data.message)
        .flat()
        .join("\n");
    } else if (typeof data.message === "string") {
      errorMsg = data.message;
    }

    return {
      success: false,
      message: errorMsg,
    };
  } catch (err) {
    console.error("❌ خطا در ارتباط با سرور:", err);
    return {
      success: false,
      message: "متاسفیم، مشکلی در ارتباط با سرور پیش آمده است.",
    };
  }
}
