"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { EditCategoryAction } from "@/utils/actions/Category";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { EditSchema } from "@/utils/schemas/Category";

export default function EditCategory({ category }) {
  const [pending, setPending] = useState(false);
  const router=useRouter()

  // -------------------------
  // Submit Handler
  // -------------------------
  const handleSubmit = async (values) => {

    setPending(true);
    const newValues={...category,
        name:values.name,
        description:values.description
    }
    console.log("📌 مقادیر ویرایش شده:", newValues);

        const result=await EditCategoryAction(category.id,values);
        console.log(result);
        
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
    setPending(false);
  };

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h4 className="fw-bold">ویرایش دسته بندی</h4>
      </div>

      <Formik
        enableReinitialize
        initialValues={{
          name: category?.name || "",
          description: category?.description || "",
        }}
        validationSchema={EditSchema}
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
                disabled={!dirty || pending || isSubmitting}
              >
                {!dirty
                  ? "بدون تغییر"
                  : pending
                  ? "در حال ذخیره..."
                  : "ویرایش دسته بندی"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
