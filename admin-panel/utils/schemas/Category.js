import * as Yup from "yup";

// -------------------------
  // Yup Validation Schema
  // -------------------------
 export const CategorySchema = Yup.object().shape({
    name: Yup.string().required("نام اجباری است"),
    description: Yup.string().required("توضیحات لازم است"),
  });

    // -------------------------
  // Yup Schema
  // -------------------------
export  const EditSchema = Yup.object().shape({
    name: Yup.string().required("نام اجباری است"),
    description: Yup.string().required("توضیحات لازم است"),
  });
