import * as Yup from "yup";
export const otpSchema = Yup.object().shape({
otp: Yup.string()
  .matches(/^\d{6}$/, "کد باید دقیقا 6 رقم عددی باشد")
  .required("وارد کردن کد الزامی است"),

});

// import * as Yup from "yup";

// export const otpSchema = Yup.object().shape({
//   otp: Yup.number()
//     .typeError("کد باید فقط عدد باشد")
//     .integer("کد باید عدد صحیح باشد")
//     .min(100000, "کد باید ۶ رقم باشد")
//     .max(999999, "کد باید ۶ رقم باشد")
//     .required("وارد کردن کد الزامی است"),
// });
