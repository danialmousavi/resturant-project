import * as Yup from "yup";
export const LoginSchema = Yup.object().shape({
  cellphone: Yup.string()
    .matches(/^(\+98|0)?9\d{9}$/, "شماره موبایل معتبر نیست")
    .required("شماره موبایل الزامی است"),
});
