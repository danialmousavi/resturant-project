import * as Yup from "yup";

// -------------------------
  // Yup Validation Schema
  // -------------------------
  const CategorySchema = Yup.object().shape({
    name: Yup.string().required("نام اجباری است"),
    description: Yup.string().required("توضیحات لازم است"),
  });
