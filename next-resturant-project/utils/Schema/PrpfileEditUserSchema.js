import * as Yup from "yup";

export const validationSchemaUser = Yup.object().shape({
    name: Yup.string()
      .min(3, "نام باید حداقل ۳ کاراکتر باشد")
      .required("نام الزامی است"),
    email: Yup.string()
      .email("ایمیل معتبر نیست")
      .required("ایمیل الزامی است"),
  });
