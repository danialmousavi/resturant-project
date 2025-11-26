import * as Yup from "yup";

export const CreateProductSchema = Yup.object().shape({
  name: Yup.string().required("نام محصول اجباری است"),
  category_id: Yup.string().required("دسته‌بندی اجباری است"),
  status: Yup.string().required("وضعیت اجباری است"),
  price: Yup.number().required("قیمت اجباری است"),
  quantity: Yup.number().required("تعداد اجباری است"),
  sale_price: Yup.number().nullable(),
  description: Yup.string().required("توضیحات الزامی است"),

  date_on_sale_from: Yup.string().nullable(),
  date_on_sale_to: Yup.string().nullable(),

  // ⛔ تصویر اصلی اجباری
  primary_image: Yup.mixed()
    .required("تصویر اصلی اجباری است")
    .test("is-file", "فایل معتبر انتخاب کنید", (value) =>
      value instanceof File
    ),

  // ⛔ گالری حداقل یک عکس لازم دارد
  images: Yup.mixed()
    .required("حداقل یک تصویر گالری انتخاب کنید")
    .test("min-files", "حداقل یک عکس انتخاب کنید", (value) => {
      return value && value.length > 0;
    })
    .test("file-types", "فایل‌های معتبر انتخاب کنید", (value) => {
      if (!value) return false;
      return [...value].every((file) => file instanceof File);
    }),
});

  // -------------------------
  // Yup Schema
  // -------------------------
  export const EditSchema = Yup.object().shape({
    name: Yup.string().required("نام اجباری است"),
    category_id: Yup.string().required("دسته بندی لازم است"),
    price: Yup.number().required("قیمت لازم است"),
    quantity: Yup.number().required("تعداد لازم است"),
    description: Yup.string().required("توضیحات لازم است"),
    status: Yup.string().required("وضعیت لازم است"),
    
  });