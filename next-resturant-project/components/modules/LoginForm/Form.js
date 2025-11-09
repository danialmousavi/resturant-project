"use client";

import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "@/styles/login.module.css";
import { LoginSchema } from "@/utils/Schema/LoginScema";


export default function LoginForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values, { resetForm }) => {
    setLoading(true);
    try {
      // شبیه‌سازی درخواست به سرور
      await new Promise((resolve) => setTimeout(resolve, 1500));

      alert(`شماره ${values.phone} ارسال شد ✅`);
      resetForm();
    } catch (err) {
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Formik
      initialValues={{ phone: "" }}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <div className="mb-3 text-start">
            <label htmlFor="phone" className="form-label">
              شماره موبایل
            </label>

            <Field
              type="tel"
              name="phone"
              placeholder="مثلاً 09123456789"
              className="form-control text-center"
              dir="ltr"
            />

            <ErrorMessage
              name="phone"
              component="div"
              className={styles.errorText}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={loading}
          >
            {loading ? (
              <>
                در حال ارسال...
              </>
            ) : (
              "ورود"
            )}
          </button>
        </Form>
      )}
    </Formik>
  );
}
