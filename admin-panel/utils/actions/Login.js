"use server"
export default async function LoginAction(values) {
  try {
    const res = await fetch("http://localhost:8000/api/admin-panel/auth/login", {
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
      console.log("dataaaaa",data);
      
    //   cookies().set({
    //     name: "loginToken",
    //     value: data.data.login_token,
    //     httpOnly: true,
    //     path: "/",
    //     maxAge: 60 * 60 * 24,
    //   });
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