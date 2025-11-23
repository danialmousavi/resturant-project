import * as Yup from "yup";

// =======================
//   Validation Schema
// =======================
export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("ایمیل معتبر نیست")
    .required("ایمیل الزامی است"),
  password: Yup.string()
    .min(6, "رمز عبور نباید کمتر از 6 کاراکتر باشد")
    .required("رمز عبور الزامی است"),
});

