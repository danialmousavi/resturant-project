"use server";
import { cookies } from "next/headers";

export default async function UserAddressForm(values) {
  const loginToken = cookies().get("Token")?.value;

  if (!loginToken) {
    return {
      success: false,
      message: "توکن معتبر نیست لطفا مجددا تلاش کنید.",
    };
  }

  try {
    console.log({
        title: values.title,
        cellphone: values.phone,
        postal_code:values.postal_code,
        province_id:values.province_id,
        city_id:values. city_id,
        address:values.address
      });
    
    const res = await fetch("http://localhost:8000/api/profile/addresses/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${loginToken}`,
      },
      body: JSON.stringify({
        title: values.title,
        cellphone: values.phone,
        postal_code:values.postal_code,
        province_id:values.province_id,
        city_id:values. city_id,
        address:values.address
      }),
    });

    const data = await res.json();
    console.log("dataAAA",data);
    
    // ✅ موفقیت
    if (data.status === "success") {
      return {
        success: true,
        message: "آدرس جدید با موفقیت ایجاد شد",
      };
    }else{
      return {
        success: true,
        message: "متاسفیم مشکلی پیش آمده است",
      };
    }
  } catch (err) {
    console.error("❌ خطا در ارتباط با سرور:", err);
    return {
      success: false,
      message: "متاسفیم، مشکلی در ارتباط با سرور پیش آمده است.",
    };
  }
}
