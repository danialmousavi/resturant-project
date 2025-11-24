"use client";

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { userSchema } from "@/utils/schemas/UserSchema";
import { CreateUser } from "@/utils/actions/User";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function Page() {
    const router=useRouter();
  //      Submit Handler
  async function handleSubmit(values, { resetForm, setSubmitting }) {
    // console.log("📌 داده‌های ارسال‌شده:", values);

    const result = await CreateUser(values);
    if (result.success) {
      toast.success(result.message || "کاربر با موفقیت ایجاد گردید", {
        position: "bottom-right",
        autoClose: 2000,
        theme: "colored",
      });
      router.push("/users");
    }else{
        toast.error(result.message || "متاسفیم مشکلی پیش امده بعدا تلاش کنید", {
        position: "bottom-right",
        autoClose: 2000,
        theme: "colored",
      });
      router.push("/users");
      
    }

    resetForm();
    setSubmitting(false);
  }
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h4 className="fw-bold">ایجاد کاربر</h4>
      </div>

      <Formik
        initialValues={{
          name: "",
          email: "",
          cellphone: "",
          password: "",
        }}
        validationSchema={userSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="row gy-4">
            {/* Name */}
            <div className="col-md-3">
              <label className="form-label">نام</label>
              <Field name="name" type="text" className="form-control" />
              <ErrorMessage
                name="name"
                component="div"
                className="text-danger mt-1"
              />
            </div>

            {/* Email */}
            <div className="col-md-3">
              <label className="form-label">ایمیل</label>
              <Field name="email" type="text" className="form-control" />
              <ErrorMessage
                name="email"
                component="div"
                className="text-danger mt-1"
              />
            </div>

            {/* Cellphone */}
            <div className="col-md-3">
              <label className="form-label">شماره تماس</label>
              <Field name="cellphone" type="text" className="form-control" />
              <ErrorMessage
                name="cellphone"
                component="div"
                className="text-danger mt-1"
              />
            </div>

            {/* Password */}
            <div className="col-md-3">
              <label className="form-label">رمز عبور</label>
              <Field name="password" type="password" className="form-control" />
              <ErrorMessage
                name="password"
                component="div"
                className="text-danger mt-1"
              />
            </div>

            {/* Submit */}
            <div className="col-12">
              <button
                type="submit"
                className="btn btn-dark"
                disabled={isSubmitting}
              >
                {isSubmitting ? "در حال ارسال..." : "ثبت کاربر"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
