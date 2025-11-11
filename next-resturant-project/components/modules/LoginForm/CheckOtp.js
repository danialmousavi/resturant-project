"use client";

import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "@/styles/login.module.css";
import LoginAction from "@/utils/actions/Auth";
import { toast } from "react-toastify";
import { otpSchema } from "@/utils/Schema/OtpSchema";


export default function CheckOtp() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values, { resetForm }) => {
    console.log(values);
    
    // setLoading(true);   
    // console.log(values);
    // const result=await LoginAction(values)
    // console.log(result);
    // if(result.success){
    //         toast.success("کد با موفقیت ارسال شد", {
    //           position: "bottom-right",
    //           autoClose: 2000,
    //           hideProgressBar: false,
    //           closeOnClick: false,
    //           pauseOnHover: true,
    //           draggable: true,
    //           progress: undefined,
    //           theme: "colored",
    //         });      
    //         setLoading(false)
    //         resetForm()
    // }else{
    //         toast.error("متاسفیم مشکلی پیش آمده است", {
    //           position: "bottom-right",
    //           autoClose: 2000,
    //           hideProgressBar: false,
    //           closeOnClick: false,
    //           pauseOnHover: true,
    //           draggable: true,
    //           progress: undefined,
    //           theme: "colored",
    //         });      
    //         resetForm()
    // }
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
      initialValues={{ otp: "" }}
      validationSchema={otpSchema}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <div className="mb-3 text-start">
            <label htmlFor="otp" className="form-label">
              کد ورود
            </label>

            <Field
              type="tel"
              name="otp"
              placeholder="123456"
              className="form-control text-center"
              dir="ltr"
            />

            <ErrorMessage
              name="otp"
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
              "تایید"
            )}
          </button>
        </Form>
      )}
    </Formik>
  );
}
