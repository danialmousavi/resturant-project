"use client";

import { useState } from "react";
import { Formik, Form, Field } from "formik";

import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import gregorian from "react-date-object/calendars/gregorian";
import gregorian_en from "react-date-object/locales/gregorian_en";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import { CreateCoupon } from "@/utils/actions/coupon";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function CreateCouponPage() {
  const [date, setDate] = useState(null);
  const router = useRouter();
  function changeDate(value, setFieldValue) {
    if (!value) return;
    // value یک DateObject هست
    const formatted = value
      .convert(gregorian, gregorian_en)
      .format("YYYY-MM-DD HH:mm:ss");

    setDate(value); // آپدیت برای نمایش در DatePicker
    setFieldValue("expired_at", formatted); // آپدیت فرم
  }

  async function handleSubmit(values, { resetForm, setSubmitting }) {
    // console.log(values); // الان expired_at درست ست شده

    setSubmitting(true);
    const result = await CreateCoupon(values);
    console.log(result);
    
    if (result.success) {
      toast.success(result.message || "کد تخفیف ایجاد شد", {
        position: "bottom-right",
        autoClose: 2000,
        theme: "colored",
      });
      router.push("/coupons");
    } else {
      toast.error(result.message || "متاسفانه کد تخفیف ایجاد نشد", {
        position: "bottom-right",
        autoClose: 2000,
        theme: "colored",
      });
      router.push("/coupons");
    }

    setSubmitting(false);

    resetForm();
    setDate(null);
  }

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h4 className="fw-bold">ایجاد تخفیف</h4>
      </div>

      <Formik
        initialValues={{
          code: "",
          percentage: "",
          expired_at: "",
        }}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values, isSubmitting }) => (
          <Form className="row gy-4">
            {/* کد */}
            <div className="col-md-3">
              <label className="form-label">کد</label>
              <Field name="code" className="form-control" />
            </div>

            {/* درصد */}
            <div className="col-md-3">
              <label className="form-label">درصد</label>
              <Field name="percentage" className="form-control" />
            </div>

            {/* تاریخ + زمان */}
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

              <Field type="hidden" name="expired_at" />
            </div>

            {/* دکمه ارسال */}
            <div className="col-12">
              <button
                type="submit"
                className="btn btn-dark mt-3"
                disabled={isSubmitting}
              >
                {isSubmitting ? "در حال ارسال..." : "ثبت"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
