import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
    title: Yup.string().required("عنوان الزامی است"),
    phone: Yup.string()
      .matches(/^09\d{9}$/, "شماره معتبر نیست")
      .required("شماره تماس الزامی است"),
    postal_code: Yup.string()
      .matches(/^\d{10}$/, "کد پستی باید ۱۰ رقم باشد")
      .required("کد پستی الزامی است"),
    address: Yup.string().required("آدرس الزامی است"),
  });