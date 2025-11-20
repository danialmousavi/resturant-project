"use server";

import { cookies } from "next/headers";

export async function payment(cart, addressId, coupon) {
  if (addressId == "") {
    return {
      status: "error",
      message: "انتخاب آدرس الزامی است",
    };
  }

  const token = cookies().get("Token")?.value;

  const res = await fetch("http://localhost:8000/api/payment/send", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      cart,
      coupon,
      address_id: addressId,
    }),
  });

  const data = await res.json();
  console.log("datakkkkkkkkkkkk", data);

  // موفقیت
  if (data.status === "success") {
    return {
      status: "success",
      message: "درحال انتقال به درگاه پرداخت",
      url: data.data.url,
    };
  }

  // ❌ هندل کردن خطاهای سرور
  if (data.status === "error") {
    let errorMessage = "";

    if (typeof data.message === "string") {
      // پیام ساده
      errorMessage = data.message;
    } else if (typeof data.message === "object") {
      // تبدیل همه پیام‌ها به یک رشته
      const allErrors = Object.values(data.message)
        .flat()
        .join(" - ");
      errorMessage = allErrors;
    } else {
      errorMessage = "مشکلی پیش آمده است";
    }

    return {
      status: "error",
      message: errorMessage,
    };
  }

  // اگر هیچ‌کدام نبود
  return {
    status: "error",
    message: "خطای ناشناخته از سرور",
  };
}
export async function paymentVeriy(trackId, status) {
    const token = cookies().get('Token');
    const res = await fetch('http://localhost:8000/api/payment/verify',{
        method:"POST",
        headers:{
            "Accept":"application/json",
            "Content-Type":"application/json",
            'Authorization': `Bearer ${token.value}` 
        },
        body:JSON.stringify({ token: trackId, status })
    });
    const data=await res.json();
    // console.log("data paymenttttttttttttttttttttttttttt",data);
    
    if (data.status === 'success') {
        return {
            status: data.status,
            payment: data.data
        }
    } else {
        return {
            status: data.status,
            message:data.error,
        }
    }
}