"use client";
import React, { useState } from "react";
import { Formik, Form, Field } from "formik";

import sendMessage from "@/utils/actions/Contact";
import { validationSchema } from "@/utils/Schema/ContactSchmae";
import { toast } from "react-toastify";

export default function ContactForm() {

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
            toast.success("پیام با موفقیت ارسال شد", {
              position: "bottom-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
            resetForm();
          } else {
            toast.error("مشکلی پیش آمده بعدا تلاش کنید", {
              position: "bottom-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
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

          </Form>
        )}
      </Formik>
    </div>
  );
}
