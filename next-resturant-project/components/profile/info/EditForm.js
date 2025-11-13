"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchemaUser } from "@/utils/Schema/PrpfileEditUserSchema";

export default function EditForm({ user }) {
  const [loading, setLoading] = useState(false);

  const initialValues = {
    name: user?.name || "",
    email: user?.email || "",
  };


  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      setLoading(true);
        console.log(values);

    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchemaUser}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({ isSubmitting, dirty, values }) => (
        <Form>
          <div className="row g-4">
            <div className="col col-md-6">
              <label className="form-label">نام و نام خانوادگی</label>
              <Field
                name="name"
                type="text"
                className="form-control"
                placeholder="نام خود را وارد کنید"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-danger small mt-1"
              />
            </div>

            <div className="col col-md-6">
              <label className="form-label">ایمیل</label>
              <Field
                name="email"
                type="text"
                className="form-control"
                placeholder="ایمیل خود را وارد کنید"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-danger small mt-1"
              />
            </div>

            <div className="col col-md-6">
              <label className="form-label">شماره تلفن</label>
              <input
                type="text"
                disabled
                className="form-control"
                defaultValue={user.cellphone}
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary mt-4"
            disabled={isSubmitting || loading || !dirty}
          >
            {loading
              ? "در حال ذخیره..."
              : !dirty
              ? "تغییری اعمال نشده"
              : "ویرایش"}
          </button>
        </Form>
      )}
    </Formik>
  );
}
