"use client";

import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "@/styles/login.module.css";
import { LoginSchema } from "@/utils/Schema/LoginScema";
import LoginAction from "@/utils/actions/Auth";
import { toast } from "react-toastify";


export default function LoginForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values, { resetForm }) => {
    setLoading(true);
    console.log(values);
    const result=await LoginAction(values)
    console.log(result);
    if(result.success){
            toast.success("کد با موفقیت ارسال شد", {
              position: "bottom-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });      
            setLoading(false)
            resetForm()
    }else{
            toast.error("متاسفیم مشکلی پیش آمده است", {
              position: "bottom-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });      
            resetForm()
    }
    // try {
    //   // شبیه‌سازی درخواست به سرور
    //   await new Promise((resolve) => setTimeout(resolve, 1500));

    //   alert(`شماره ${values.phone} ارسال شد ✅`);
    //   resetForm();
    // } catch (err) {
    //   console.error("Error:", err);
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <Formik
      initialValues={{ cellphone: "" }}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <div className="mb-3 text-start">
            <label htmlFor="cellphone" className="form-label">
              شماره موبایل
            </label>

            <Field
              type="tel"
              name="cellphone"
              placeholder="مثلاً 09123456789"
              className="form-control text-center"
              dir="ltr"
            />

            <ErrorMessage
              name="cellphone"
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
