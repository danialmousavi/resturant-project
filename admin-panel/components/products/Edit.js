"use client";

import { useEffect, useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import DateObject from "react-date-object";

import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import gregorian from "react-date-object/calendars/gregorian";
import gregorian_en from "react-date-object/locales/gregorian_en";

import { getBlurDataURL } from "@/utils/helper";
import { editProductAction } from "@/utils/actions/Product";
import { EditSchema } from "@/utils/schemas/ProductShema";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function EditProduct({ product, categories }) {
  const primaryRef = useRef();
  const [previewPrimary, setPreviewPrimary] = useState(product.primary_image);
  const [dateOnSale, setDateOnSale] = useState([]);
  const router = useRouter();
  // -------------------------
  // INIT DATE
  // -------------------------
  useEffect(() => {
    if (product.date_on_sale_from && product.date_on_sale_to) {
      const fromObj = new Date(product.date_on_sale_from);
      const toObj = new Date(product.date_on_sale_to);
      setDateOnSale([fromObj, toObj]);
    }
  }, [product]);

  // -------------------------
  // PRIMARY IMAGE HANDLER
  // -------------------------
  const onPrimaryChange = (e, setFieldValue) => {
    const file = e.target.files[0];
    if (!file) return;
    setFieldValue("primary_image", file);

    const reader = new FileReader();
    reader.onloadend = () => setPreviewPrimary(reader.result.toString());
    reader.readAsDataURL(file);
  };

  // -------------------------
  // DATE HANDLER
  // -------------------------
  const handleChangeDate = (value, setFieldValue) => {
    if (value.length === 2) {
      const from = value[0]
        .convert(gregorian, gregorian_en)
        .format("YYYY-MM-DD HH:mm:ss");
      const to = value[1]
        .convert(gregorian, gregorian_en)
        .format("YYYY-MM-DD HH:mm:ss");
      setDateOnSale(value);
      setFieldValue("date_on_sale_from", from);
      setFieldValue("date_on_sale_to", to);
    }
  };

  // -------------------------
  // CONVERT SHAMSI TO GREGORIAN
  // -------------------------
  const convertShamsiToGregorian = (shamsiDate) => {
    if (!shamsiDate) return "";
    const dateObj = new DateObject({
      date: shamsiDate,
      calendar: persian,
      locale: persian_fa,
    });
    return dateObj
      .convert(gregorian, gregorian_en)
      .format("YYYY-MM-DD HH:mm:ss");
  };

  // -------------------------
  // SUBMIT HANDLER
  // -------------------------
  const handleSubmit = async (values) => {
    const formData = new FormData();

    formData.append("name", values.name);
    formData.append("category_id", values.category_id);
    formData.append("description", values.description);
    formData.append("status", values.status === "فعال" ? 1 : 0);
    formData.append("price", values.price);
    formData.append("quantity", values.quantity);
    formData.append("sale_price", values.sale_price || "");

    formData.append(
      "date_on_sale_from",
      convertShamsiToGregorian(values.date_on_sale_from)
    );
    formData.append(
      "date_on_sale_to",
      convertShamsiToGregorian(values.date_on_sale_to)
    );

    if (values.primary_image instanceof File) {
      formData.append("primary_image", values.primary_image);
    }

    values.images.forEach((file) => {
      if (file instanceof File) formData.append("images[]", file);
    });

    formData.append("_method", "PUT");

    try {
      const result = await editProductAction(product.id, formData);
      if (result.success) {
        toast.success(result.message || "شما با موفقیت محصول را ویرایش کردید", {
          position: "bottom-right",
          autoClose: 2000,
          theme: "colored",
        });
        router.push("/products");
      }
      console.log("Edit Result:", result);
    } catch (err) {
      toast.success(result.message || "متاسفیم مشکلی پیش آمده است", {
        position: "bottom-right",
        autoClose: 2000,
        theme: "colored",
      });
      console.error("Error editing product:", err);
    }
  };

  return (
    <Formik
      enableReinitialize
      initialValues={{
        name: product.name || "",
        category_id: product.category_id || "",
        primary_image: product.primary_image || null,
        primary_image_blurDataURL: getBlurDataURL(),
        images: product.images || [],
        description: product.description || "",
        status: product.status?.toString() || "1",
        price: product.price || "",
        quantity: product.quantity || "",
        sale_price: product.sale_price || "",
        date_on_sale_from: product.date_on_sale_from || "",
        date_on_sale_to: product.date_on_sale_to || "",
      }}
      validationSchema={EditSchema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue, values, dirty, isSubmitting }) => (
        <Form className="row gy-4">
          {/* PRIMARY IMAGE */}
          <div className="col-md-12 mb-5">
            <div className="row justify-content-center">
              <div className="col-md-4">
                <label className="form-label">تصویر اصلی</label>
                {previewPrimary && (
                  <div className="position-relative">
                    <img
                      src={previewPrimary}
                      width={350}
                      height={220}
                      className="rounded"
                    />
                    <div
                      className="position-absolute"
                      style={{ top: 5, right: 15 }}
                      onClick={() => {
                        primaryRef.current.value = "";
                        setPreviewPrimary(null);
                        setFieldValue("primary_image", null);
                      }}
                    >
                      <i className="bi bi-x text-danger fs-2 cursor-pointer"></i>
                    </div>
                  </div>
                )}
                <input
                  type="file"
                  ref={primaryRef}
                  className={previewPrimary ? "d-none" : "form-control"}
                  onChange={(e) => onPrimaryChange(e, setFieldValue)}
                />
                <ErrorMessage
                  name="primary_image"
                  component="div"
                  className="text-danger mt-1"
                />
              </div>
            </div>
          </div>

          {/* GALLERY IMAGES (readonly) */}
          <div className="col-md-3">
            <label className="form-label">گالری تصاویر</label>
            <div className="d-flex gap-2 mb-2 flex-wrap">
              {values.images.map((img, i) => (
                <img
                  key={i}
                  src={img.image || img}
                  width={80}
                  height={80}
                  className="rounded"
                  style={{ objectFit: "cover" }}
                />
              ))}
            </div>
            <input type="file" multiple className="form-control" disabled />
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
              {categories?.map((cat) => (
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
            <ErrorMessage name="price" className="text-danger mt-1" />
          </div>

          {/* QUANTITY */}
          <div className="col-md-3">
            <label className="form-label">تعداد</label>
            <Field name="quantity" className="form-control" />
            <ErrorMessage name="quantity" className="text-danger mt-1" />
          </div>

          {/* SALE PRICE */}
          <div className="col-md-3">
            <label className="form-label">قیمت حراجی</label>
            <Field name="sale_price" className="form-control" />
          </div>

          {/* DATE */}
          <div className="col-md-3">
            <label className="form-label">تاریخ شروع و پایان</label>
            <DatePicker
              range
              calendar={persian}
              locale={persian_fa}
              value={dateOnSale}
              onChange={(v) => handleChangeDate(v, setFieldValue)}
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
            <ErrorMessage name="description" className="text-danger mt-1" />
          </div>

          {/* SUBMIT */}
          <div>
            <button
              type="submit"
              disabled={!dirty || isSubmitting}
              className="btn btn-outline-dark mt-3 mb-5"
            >
              {!dirty
                ? "بدون تغییر"
                : isSubmitting
                ? "در حال ارسال..."
                : "ویرایش محصول"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
