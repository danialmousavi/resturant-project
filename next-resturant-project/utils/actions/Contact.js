"use server";

export default async function sendMessage(values) {
  try {
    const res = await fetch("http://localhost:8000/api/contact-us", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    console.log("resssssssssss", res);
    if (res.status == 201) {
      return {
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
