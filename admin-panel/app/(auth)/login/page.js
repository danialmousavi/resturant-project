"use client";

import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import LoginAction from "@/utils/actions/Login";


// =======================
//   Validation Schema
// =======================
const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("ایمیل معتبر نیست")
    .required("ایمیل الزامی است"),
  password: Yup.string()
    .min(6, "رمز عبور نباید کمتر از 6 کاراکتر باشد")
    .required("رمز عبور الزامی است"),
});


// =======================
//   Submit Handler
// =======================
async function handleSubmit(values, { resetForm, setSubmitting }) {
  console.log("📌 داده‌های ارسال‌شده:", values);

  //  درخواست (API)
    const result=await LoginAction(values)
    console.log(result);
    
  // ریست فرم
  resetForm();
  setSubmitting(false);
}



// =======================
//       Component
// =======================
export default function Page() {
  return (
    <div className="row mt-5 justify-content-center align-items-center w-100">
      <div className="col-md-3">
        <div className="card">
          <div className="card-body py-5">
            <h4 className="mb-5 text-center">ورود به پنل ادمین</h4>

            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={loginSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>

                  {/* Email */}
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">ایمیل</label>
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-danger mt-1"
                    />
                  </div>

                  {/* Password */}
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">رمز عبور</label>
                    <Field
                      type="password"
                      name="password"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-danger mt-1"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="btn btn-dark w-100"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "در حال ورود..." : "ورود"}
                  </button>

                </Form>
              )}
            </Formik>

          </div>
        </div>
      </div>
    </div>
  );
}
