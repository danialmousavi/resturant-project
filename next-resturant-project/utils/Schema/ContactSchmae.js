import * as Yup from "yup";
export const validationSchema = Yup.object({
    name: Yup.string().required("وارد کردن نام الزامی است"),
    email: Yup.string().email("ایمیل معتبر نیست").required("ایمیل الزامی است"),
    subject: Yup.string().required("موضوع پیام الزامی است"),
    text: Yup.string().required("متن پیام الزامی است"),
  });
