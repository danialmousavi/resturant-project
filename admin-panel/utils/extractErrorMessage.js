// تابع استخراج پیام از ساختارهای مختلف پیام خطا
export function extractErrorMessage(data) {
  if (!data) return "خطایی رخ داده است";

  // 1) اگر پیام string بود
  if (typeof data.message === "string") return data.message;

  // 2) اگر پیام object شامل آرایه بود
  if (typeof data.message === "object") {
    // اولین کلید مثل user یا password
    const firstKey = Object.keys(data.message)[0];
    if (Array.isArray(data.message[firstKey])) {
      return data.message[firstKey][0]; // اولین پیام
    }
  }

  return "اطلاعات ورود اشتباه است";
}
