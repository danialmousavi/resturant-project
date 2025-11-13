"use client";

import React, { useContext, useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "@/styles/login.module.css";
import { toast } from "react-toastify";
import { otpSchema } from "@/utils/Schema/OtpSchema";
import { CheckOtpAction, ResendOtpAction } from "@/utils/actions/Auth";
import AuthContext from "@/utils/context/AuthContext";
import { useRouter } from "next/navigation";

export default function CheckOtp() {
  const [loading, setLoading] = useState(false);
  const { loginContext } = useContext(AuthContext);
  const router=useRouter()
  // 🕒 تایمر (قابل تنظیم)
  const [minutes, setMinutes] = useState(1); // ← زمان دقیقه‌ها
  const [seconds, setSeconds] = useState(0); // ← زمان ثانیه‌ها
  const [isExpired, setIsExpired] = useState(false);

  // 🎯 تابع ارسال مجدد کد
  const handleResendCode =async () => {
    // اینجا بعداً می‌تونی اکشن ارسال مجدد کد رو بزاری
    const result=await ResendOtpAction()
    console.log("resulttttttttttt",result)
    if(result.success){
      toast.info(result.message||"کد جدید ارسال شد", {
        position: "bottom-right",
        autoClose: 2000,
        theme: "colored",
      });
      setMinutes(1);
      setSeconds(0);
      setIsExpired(false);
      // ریست تایمر

    }else{
      toast.error(result.message||"مشکلی پیش آمده است لطفا بعدا تلاش کنید", {
        position: "bottom-right",
        autoClose: 2000,
        theme: "colored",
      });
      router.replace("/auth/login")
    }
  };


  // 🕰️ منطق تایمر
  useEffect(() => {
    let timer;
    if (!isExpired) {
      timer = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prev) => prev - 1);
        } else if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(timer);
            setIsExpired(true);
          } else {
            setMinutes((prev) => prev - 1);
            setSeconds(59);
          }
        }
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [minutes, seconds, isExpired]);

  // ✅ تابع ارسال فرم
  const handleSubmit = async (values, { resetForm }) => {
    setLoading(true);
    const result = await CheckOtpAction(values);
    if (result.success) {
      toast.success("شما با موفقیت وارد شدید", {
        position: "bottom-right",
        autoClose: 2000,
        theme: "colored",
      });
      setLoading(false);
      resetForm();
      loginContext(result?.data);
      router.replace("/")
    } else {
      toast.error("متاسفیم مشکلی پیش آمده است", {
        position: "bottom-right",
        autoClose: 2000,
        theme: "colored",
      });
      setLoading(false);
      resetForm();
    }
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
            {loading ? "در حال ارسال..." : "تایید"}
          </button>

          {/* 🔥 تایمر یا دکمه ارسال مجدد */}
          <div className="text-center mt-3">
            {!isExpired ? (
              <p className="text-muted">
                ارسال مجدد تا{" "}
                <span className="fw-bold">
                  {String(minutes).padStart(2, "0")}:
                  {String(seconds).padStart(2, "0")}
                </span>
              </p>
            ) : (
              <button
                type="button"
                className="btn btn-outline-secondary btn-sm"
                onClick={handleResendCode}
              >
                ارسال مجدد کد
              </button>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
}
