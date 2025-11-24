import * as Yup from "yup";


// =======================
//        Validation
// =======================
export const userSchema = Yup.object().shape({
  name: Yup.string()
    .required("نام الزامی است")
    .min(2, "نام باید حداقل ۲ کاراکتر باشد"),

  email: Yup.string()
    .email("ایمیل معتبر نیست")
    .required("ایمیل الزامی است"),

  cellphone: Yup.string()
    .matches(/^09\d{9}$/, "شماره تماس معتبر نیست (11 رقمی، با 09)")
    .required("شماره تماس الزامی است"),

  password: Yup.string()
    .min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد")
    .required("رمز عبور الزامی است"),
});

