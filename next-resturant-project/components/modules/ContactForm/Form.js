"use client";
import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import sendMessage from "@/utils/actions/Contact";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const validationSchema = Yup.object({
    name: Yup.string().required("وارد کردن نام الزامی است"),
    email: Yup.string().email("ایمیل معتبر نیست").required("ایمیل الزامی است"),
    subject: Yup.string().required("موضوع پیام الزامی است"),
    text: Yup.string().required("متن پیام الزامی است"),
  });

  console.log(status);

  return (
    <div className="form_container">
      <Formik
        initialValues={{ name: "", email: "", subject: "", text: "" }}
        validationSchema={validationSchema}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          const result = await sendMessage(values); // ارسال به اکشن سرور
          if (result?.success) {
            setStatus("✅ پیام ارسال شد");
            resetForm();
          } else {
            setStatus("❌ خطا در ارسال پیام");
          }
          setSubmitting(false);
        }}
      >
        {({ errors, isSubmitting }) => (
          <Form noValidate>
            {/* نام و نام خانوادگی */}
            <div className="mb-3">
              <Field
                type="text"
                name="name"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                placeholder="نام و نام خانوادگی"
              />
              {errors.name && (
                <div className="invalid-feedback">{errors.name}</div>
              )}
            </div>

            {/* ایمیل */}
            <div className="mb-3">
              <Field
                type="text"
                name="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                placeholder="ایمیل"
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>

            {/* موضوع */}
            <div className="mb-3">
              <Field
                type="text"
                name="subject"
                className={`form-control ${errors.subject ? "is-invalid" : ""}`}
                placeholder="موضوع پیام"
              />
              {errors.subject && (
                <div className="invalid-feedback">{errors.subject}</div>
              )}
            </div>

            {/* متن پیام */}
            <div className="mb-3">
              <Field
                as="textarea"
                name="text"
                rows="5"
                className={`form-control ${errors.text ? "is-invalid" : ""}`}
                placeholder="متن پیام"
              />
              {errors.text && (
                <div className="invalid-feedback">{errors.text}</div>
              )}
            </div>

            {/* دکمه ارسال */}
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? "در حال ارسال..." : "ارسال پیام"}
            </button>

            {/* پیام وضعیت ارسال */}
            {status && <div className="mt-3 alert alert-info">{status}</div>}
          </Form>
        )}
      </Formik>
    </div>
  );
}
