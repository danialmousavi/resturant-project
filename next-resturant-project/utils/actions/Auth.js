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
export async function me() {
    const token = cookies().get('Token')?.value

    if (!token) {
        return {
            error: 'Not Authorized'
        }
    }

    const res = await fetch("http://localhost:8000/api/auth/me",{
      method:"POST",
      headers:{
        "Authorization":`Bearer ${token}`,
        "Accept":"application/json"
      },
      body:JSON.stringify({})
    })
    const data=await res.json();
    
    if (data.status === 'success') {
        return {
            user: data.data
        }
    } else {
        return {
            error: "User Forbidden"
        }
    }

}
export async function ResendOtpAction() {
  const loginToken = cookies().get("loginToken").value;
  if (!loginToken) {
    return {
      success: false,
      message: "توکن معتبر نیست لطفا مجددا تلاش کنید",
    };
  }
  console.log("loginToken", loginToken);
  try {
    const res = await fetch("http://localhost:8000/api/auth/resend-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        login_token: loginToken,
      }),
    });
    if (res.status == 200) {
      const data = await res.json();
      
        cookies().set({
          name:"loginToken",
          value:data.data.login_token,
          httpOnly:true,
          path:"/",
          maxAge:60*60*24
        })
        return {
            success: true,
            message: "کد ورود دوباره برای شما ارسال شد",
        }
    } else {
        return {
            success: false,
            message: data.message,
        }
    }
  } catch (err) {
    console.log("❌ خطا:", err);
    return { success: false ,message:"متاسفیم مشکلی پیش آمده است"};
  }
}
export async function LogoutAction() {
      const token = cookies().get('Token')?.value

    if (!token) {
        return {
            error: 'Not Authorized'
        }
    }
  try {
    const res = await fetch("http://localhost:8000/api/auth/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization":`Bearer ${token}`,
        accept: "application/json",
      },
      body: JSON.stringify({}),
    });
    // console.log("resssssssssss", res);
    if (res.status == 200) {
      const data = await res.json();
      cookies().delete("Token")
      return {
        success: true,
        message:"شما باموفقیت خارج شدید"
      };
    } else {
      return {
        success: false,
        message:"متاسفیم مشکلی پیش آمده لطفا بعدا تلاش کنید"
      };;
    }
  } catch (err) {
    console.log("❌ خطا:", err);
    return { 
        success: false,
        message:"متاسفیم مشکلی پیش آمده لطفا بعدا تلاش کنید"

     };
  }
}