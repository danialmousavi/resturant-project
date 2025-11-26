"use client";

import { useState, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import gregorian from "react-date-object/calendars/gregorian";
import gregorian_en from "react-date-object/locales/gregorian_en";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import { getBlurDataURL } from "@/utils/helper";
import { CreateProductSchema } from "@/utils/schemas/ProductShema";
import { createProductAction } from "@/utils/actions/Product";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function CreateProduct({ categories }) {
  const primaryRef = useRef();
  const router=useRouter()
  const [previewImage, setPreviewImage] = useState(null);
  const [dateOnSale, setDateOnSale] = useState([]);
  // -------------------------
  // SUBMIT FUNCTION
  // -------------------------
  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      // console.log("🔵 Raw Formik Values:", values);

      const formData = new FormData();

      // رشته ها
      formData.append("name", values.name);
      formData.append("category_id", values.category_id);
      formData.append("description", values.description);
      formData.append("status", values.status);
      formData.append("price", values.price);
      formData.append("quantity", values.quantity);
      formData.append("sale_price", values.sale_price || "");

      // تاریخ‌ها
      formData.append("date_on_sale_from", values.date_on_sale_from || "");
      formData.append("date_on_sale_to", values.date_on_sale_to || "");

      // عکس اصلی + بلور
      if (values.primary_image) {
        formData.append("primary_image", values.primary_image);
        formData.append(
          "primary_image_blurDataURL",
          values.primary_image_blurDataURL || ""
        );
      }

      // عکس‌های گالری
      if (values.images && values.images.length > 0) {
        [...values.images].forEach((img) => {
          formData.append("images[]", img);
        });
      }

      // اینجا می‌تونی صدا بزنی:
      const result = await createProductAction(formData);
      if (result.success) {
        toast.success(result.message || "محصول ایجاد شد", {
          position: "bottom-right",
          autoClose: 2000,
          theme: "colored",
        });
        router.replace("/products")
        resetForm()
      }else{
        toast.error(result.message || "متاسفانه مشکلی در ایجاد محصول پیش آمده بعدا تلاش کنید", {
          position: "bottom-right",
          autoClose: 2000,
          theme: "colored",
        });
        resetForm()
      }
      console.log("result", result);
    } catch (error) {
      console.log("❌ Submit Error:", error);
    }

    setSubmitting(false);
    resetForm();
  };

  // -------------------------
  // PREVIEW PRIMARY IMAGE
  // -------------------------
  function onPrimaryImage(e, setFieldValue) {
    const file = e.target.files[0];
    if (!file) return;

    setFieldValue("primary_image", file);

    const reader = new FileReader();
    reader.onloadend = () => setPreviewImage(reader.result.toString());
    reader.readAsDataURL(file);
  }

  // -------------------------
  // DATE PICKER HANDLER
  // -------------------------
  function changeDate(value, setFieldValue) {
    if (value.length === 2) {
      const from = value[0]
        .convert(gregorian, gregorian_en)
        .format("YYYY-MM-DD HH:mm:ss");

      const to = value[1]
        .convert(gregorian, gregorian_en)
        .format("YYYY-MM-DD HH:mm:ss");

      setFieldValue("date_on_sale_from", from);
      setFieldValue("date_on_sale_to", to);

      setDateOnSale(value);
    }
  }

  return (
    <Formik
      initialValues={{
        name: "",
        category_id: "",
        primary_image: null,
        primary_image_blurDataURL: getBlurDataURL(),
        images: [],
        description: "",
        status: "1",
        price: "",
        quantity: "",
        sale_price: "",
        date_on_sale_from: "",
        date_on_sale_to: "",
      }}
      validationSchema={CreateProductSchema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue, isSubmitting }) => (
        <Form className="row gy-4">
          {/* PRIMARY IMAGE */}
          <div className="col-md-12 mb-5">
            <div className="row justify-content-center">
              <div className="col-md-4">
                <label className="form-label">تصویر اصلی</label>

                {previewImage && (
                  <div className="position-relative">
                    <img
                      src={previewImage}
                      width={350}
                      height={220}
                      className="rounded"
                    />
                    <div
                      className="position-absolute"
                      style={{ top: 5, right: 15 }}
                      onClick={() => {
                        primaryRef.current.value = "";
                        setPreviewImage(null);
                        setFieldValue("primary_image", null);
                      }}
                    >
                      <i className="bi bi-x text-danger fs-2 cursor-pointer"></i>
                    </div>
                  </div>
                )}

                <input
                  type="file"
                  className={previewImage ? "d-none" : "form-control"}
                  ref={primaryRef}
                  onChange={(e) => onPrimaryImage(e, setFieldValue)}
                />
                <ErrorMessage
                  name="primary_image"
                  component="div"
                  className="text-danger mt-1"
                />
              </div>
            </div>
          </div>

          {/* MULTIPLE IMAGES */}
          <div className="col-md-3">
            <label className="form-label">تصاویر</label>
            <input
              type="file"
              multiple
              className="form-control"
              onChange={(e) => setFieldValue("images", [...e.target.files])}
            />
            <ErrorMessage
              name="images"
              component="div"
              className="text-danger mt-1"
            />
          </div>

          {/* NAME */}
          <div className="col-md-3">
            <label className="form-label">نام</label>
            <Field name="name" className="form-control" />
            <ErrorMessage
              name="name"
              component="div"
              className="text-danger mt-1"
            />
          </div>

          {/* CATEGORY */}
          <div className="col-md-3">
            <label className="form-label">دسته بندی</label>
            <Field as="select" name="category_id" className="form-select">
              <option value="">انتخاب دسته بندی</option>
              {categories.map((cat) => (
                <option value={cat.id} key={cat.id}>
                  {cat.name}
                </option>
              ))}
            </Field>
            <ErrorMessage
              name="category_id"
              component="div"
              className="text-danger mt-1"
            />
          </div>

          {/* STATUS */}
          <div className="col-md-3">
            <label className="form-label">وضعیت</label>
            <Field as="select" name="status" className="form-select">
              <option value="1">فعال</option>
              <option value="0">غیر فعال</option>
            </Field>
          </div>

          {/* PRICE */}
          <div className="col-md-3">
            <label className="form-label">قیمت</label>
            <Field name="price" className="form-control" />
            <ErrorMessage
              name="price"
              component="div"
              className="text-danger mt-1"
            />
          </div>

          {/* QUANTITY */}
          <div className="col-md-3">
            <label className="form-label">تعداد</label>
            <Field name="quantity" className="form-control" />
            <ErrorMessage
              name="quantity"
              component="div"
              className="text-danger mt-1"
            />
          </div>

          {/* SALE PRICE */}
          <div className="col-md-3">
            <label className="form-label">قیمت حراجی</label>
            <Field name="sale_price" className="form-control" />
          </div>

          {/* DATE */}
          <div className="col-md-3">
            <label className="form-label">تاریخ شروع و پایان حراجی</label>

            <DatePicker
              range
              calendar={persian}
              locale={persian_fa}
              value={dateOnSale}
              onChange={(v) => changeDate(v, setFieldValue)}
              format="YYYY-MM-DD HH:mm:ss"
              inputClass="form-control"
              plugins={[
                <TimePicker position="bottom" />,
                <DatePanel markFocused />,
              ]}
            />
          </div>

          {/* DESCRIPTION */}
          <div className="col-md-12">
            <label className="form-label">توضیحات</label>
            <Field
              as="textarea"
              name="description"
              rows="5"
              className="form-control"
            />
            <ErrorMessage
              name="description"
              component="div"
              className="text-danger mt-1"
            />
          </div>

          {/* SUBMIT */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-outline-dark mt-3 mb-5"
            >
              {isSubmitting ? "در حال ارسال..." : "ایجاد محصول"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
