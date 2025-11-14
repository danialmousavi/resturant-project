"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchema } from "@/utils/Schema/AddressSchema";
import UserAddressForm from "@/utils/actions/profile/UserAddressForm";
import { toast } from "react-toastify";

export default function CreateForm({ provinces, cities }) {
  // مدیریت استان و شهر با state معمولی
  const [provinceId, setProvinceId] = useState(provinces[0].id);
  const [citiesFilter, setCitiesFilter] = useState(
    cities.filter((c) => c.province_id == provinces[0].id)
  );
  const [cityId, setCityId] = useState(
    cities.filter((c) => c.province_id == provinces[0].id)[0]?.id || ""
  );

  // سابمیت جدا:
  async function handleSubmit(values, { setSubmitting, resetForm }) {
    const payload = {
      ...values,
      province_id: provinceId,
      city_id: cityId,
    };

    const result = await UserAddressForm(payload);
    console.log("REsult Address", result);

    if (result.success) {
      toast.success(result.message || "آدرس جدید با موفقیت ایجاد گردید", {
        position: "bottom-right",
        autoClose: 2000,
        theme: "colored",
      });
      resetForm();
      router.refresh();
    } else {
      toast.error(result.message || "مشکلی پیش آمده است لطفا بعدا تلاش کنید", {
        position: "bottom-right",
        autoClose: 2000,
        theme: "colored",
      });
      resetForm();
      router.refresh();
    }
    setSubmitting(false);
  }

  function changeProvince(e) {
    const pid = Number(e.target.value);
    setProvinceId(pid);

    const filtered = cities.filter((c) => c.province_id == pid);
    setCitiesFilter(filtered);
    setCityId(filtered[0]?.id || "");
  }

  return (
    <>
      <button
        className="btn btn-primary"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseExample"
      >
        ایجاد آدرس جدید
      </button>

      <div className="collapse mt-3" id="collapseExample">
        <div className="card card-body">
          <Formik
            initialValues={{
              title: "",
              phone: "",
              postal_code: "",
              address: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <label className="form-label">عنوان</label>
                    <Field type="text" name="title" className="form-control" />
                    <ErrorMessage
                      name="title"
                      className="text-danger"
                      component="div"
                    />
                  </div>

                  <div className="col-12 col-md-6">
                    <label className="form-label">شماره تماس</label>
                    <Field type="text" name="phone" className="form-control" />
                    <ErrorMessage
                      name="phone"
                      className="text-danger"
                      component="div"
                    />
                  </div>

                  <div className="col-12 col-md-6">
                    <label className="form-label">کد پستی</label>
                    <Field
                      type="text"
                      name="postal_code"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="postal_code"
                      className="text-danger"
                      component="div"
                    />
                  </div>

                  {/* استان */}
                  <div className="col-12 col-md-6">
                    <label className="form-label">استان</label>
                    <select
                      className="form-select"
                      value={provinceId}
                      onChange={changeProvince}
                    >
                      {provinces.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* شهر */}
                  <div className="col-12 col-md-6">
                    <label className="form-label">شهر</label>
                    <select
                      className="form-select"
                      value={cityId}
                      onChange={(e) => setCityId(Number(e.target.value))}
                    >
                      {citiesFilter.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* آدرس → تمام عرض */}
                  <div className="col-12">
                    <label className="form-label">آدرس</label>
                    <Field
                      as="textarea"
                      rows="5"
                      name="address"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="address"
                      className="text-danger"
                      component="div"
                    />
                  </div>
                </div>

                <button
                  className="btn btn-primary mt-4"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "در حال ثبت..." : "ایجاد"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}
