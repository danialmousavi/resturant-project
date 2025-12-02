"use client"
import { Field, Form, Formik } from "formik";
import React, { useState, useEffect } from "react";

import DatePicker from "react-multi-date-picker";
import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import gregorian from "react-date-object/calendars/gregorian";
import gregorian_en from "react-date-object/locales/gregorian_en";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import { EditCouponAction } from "@/utils/actions/coupon";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function EditCoupon({ coupon }) {

  const [date, setDate] = useState(null);
    const router=useRouter()
  // مقدار اولیه DatePicker
  useEffect(() => {
    if (coupon.expired_at) {
      const persianDate = new DateObject({
        date: coupon.expired_at,
        format: "YYYY-MM-DD HH:mm:ss",
        calendar: persian,
        locale: persian_fa,
      });

      setDate(persianDate);
    }
  }, [coupon.expired_at]);


  function changeDate(value, setFieldValue) {
    if (!value) return;

    // تبدیل به میلادی
    const gregorianValue = value
      .convert(gregorian, gregorian_en)
      .format("YYYY-MM-DD HH:mm:ss");

    setDate(value);
    setFieldValue("expired_at", gregorianValue);
  }


  async function handleSubmit(values, { setSubmitting }) {

    // اگر کاربر تاریخ را تغییر نداده باشد هنوز شمسی است → باید تبدیل شود
    if (date) {
      const finalDate = date
        .convert(gregorian, gregorian_en)
        .format("YYYY-MM-DD HH:mm:ss");

      values.expired_at = finalDate; // تبدیل لحظه آخر
    }

    console.log("📌 ارسال نهایی:", values);
    const result=await EditCouponAction(coupon.id,values)
    if (result.success) {
      toast.success(result.message || "کد با موفقیت ویرایش شد ", {
        position: "bottom-right",
        autoClose: 2000,
        theme: "colored",
      });
      router.replace("/coupons")
    } else {
      toast.error(result.message || "متافسیم مشکلی پیش آمده است ", {
        position: "bottom-right",
        autoClose: 2000,
        theme: "colored",
      });
    } 
    setSubmitting(false);
  }


  return (
    <>
      <Formik
        initialValues={{
          code: coupon.code || "",
          percentage: coupon.percentage || "",
          expired_at: coupon.expired_at || "",
        }}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ isSubmitting, dirty, setFieldValue }) => (
          <Form>

            <div className="row gy-4">

              <div className="col-md-3">
                <label className="form-label">کد</label>
                <Field name="code" className="form-control" />
              </div>

              <div className="col-md-3">
                <label className="form-label">درصد</label>
                <Field name="percentage" className="form-control" />
              </div>

              <div className="col-md-3">
                <label className="form-label">تاریخ انقضا</label>

                <DatePicker
                  calendar={persian}
                  locale={persian_fa}
                  value={date}
                  onChange={(v) => changeDate(v, setFieldValue)}
                  format="YYYY-MM-DD HH:mm:ss"
                  inputClass="form-control"
                  plugins={[<TimePicker position="bottom" />]}
                />

                <Field name="expired_at" type="hidden" />
              </div>

            </div>

            <div className="mt-4">
              <button
                className="btn btn-dark"
                type="submit"
                disabled={isSubmitting || !dirty}
              >
                ویرایش کد
              </button>
            </div>

          </Form>
        )}
      </Formik>
    </>
  );
}
