"use client";

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { userEditSchema } from "@/utils/schemas/UserSchema";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { EditUserAction } from "@/utils/actions/User";

export default function EditUser({ user }) {
  const router = useRouter();

  async function handleSubmit(values, { resetForm, setSubmitting }) {
    console.log("📌 داده‌های ارسال‌شده:", values);

    //send request to server
    const result = await EditUserAction(user.id, values);
    if (result.success) {
      toast.success(result.message || "کاربر با موفقیت ویرایش شد ", {
        position: "bottom-right",
        autoClose: 2000,
        theme: "colored",
      });
    } else {
      toast.error(result.message || "متافسیم مشکلی پیش آمده است ", {
        position: "bottom-right",
        autoClose: 2000,
        theme: "colored",
      });
    }
    console.log(result);

    setSubmitting(false);
  }

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h4 className="fw-bold">ویرایش کاربر</h4>
      </div>

      <Formik
        initialValues={{
          name: user.name || "",
          email: user.email || "",
          cellphone: user.cellphone || "",
        }}
        validationSchema={userEditSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ isSubmitting, dirty }) => (
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

            {/* Submit */}
            <div className="col-12">
              <button
                type="submit"
                className="btn btn-dark"
                disabled={isSubmitting || !dirty}
              >
                {isSubmitting ? "در حال ارسال..." : "ویرایش کاربر"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
