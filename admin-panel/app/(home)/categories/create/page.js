"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import { createCategoryAction } from "@/utils/actions/Category";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { CategorySchema } from "@/utils/schemas/Category";

export default function Page() {
  const [pending, setPending] = useState(false);
    const router=useRouter()

  // -------------------------
  // Submit Handler
  // -------------------------
  const handleSubmit = async (values, { resetForm }) => {
    // console.log("📌 مقادیر فرم:", values);

    setPending(true);

    // شبیه‌سازی درخواست سرور
    const result=await createCategoryAction(values);
        if (result.success) {
          toast.success(result.message || "دسته بندی با موفقیت ایجاد گردید", {
            position: "bottom-right",
            autoClose: 2000,
            theme: "colored",
          });
          router.push("/categories");
        }else{
            toast.error(result.message || "متاسفیم مشکلی پیش امده بعدا تلاش کنید", {
            position: "bottom-right",
            autoClose: 2000,
            theme: "colored",
          });
          router.push("/categories");
          
        }
    resetForm(); // ریست فرم بعد از ارسال
    setPending(false);
  };

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h4 className="fw-bold">ایجاد دسته بندی</h4>
      </div>

      <Formik
        initialValues={{ name: "", description: "" }}
        validationSchema={CategorySchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, dirty }) => (
          <Form className="row gy-4">
            {/* NAME */}
            <div className="col-md-3">
              <label className="form-label">نام</label>
              <Field name="name" className="form-control" />

              <ErrorMessage
                name="name"
                component="div"
                className="text-danger mt-1"
              />
            </div>

            {/* DESCRIPTION */}
            <div className="col-md-3">
              <label className="form-label">توضیحات</label>
              <Field name="description" className="form-control" />

              <ErrorMessage
                name="description"
                component="div"
                className="text-danger mt-1"
              />
            </div>

            {/* SUBMIT BUTTON */}
            <div className="col-md-12">
              <button
                className="btn btn-outline-dark mt-3"
                type="submit"
                disabled={pending || isSubmitting}
              >
                {pending ? "در حال ایجاد..." : "ایجاد دسته بندی"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
