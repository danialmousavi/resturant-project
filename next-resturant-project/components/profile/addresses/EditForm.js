"use client";
import React, { useState, useEffect, useCallback } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchema } from "@/utils/Schema/AddressSchema";
import { UserAddressDeleteForm } from "@/utils/actions/profile/UserAddressForm";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function EditForm({ address, provinces = [], cities = [] }) {
  // State مدیریت استان و شهر
  const router=useRouter()
  const [provinceId, setProvinceId] = useState(address?.province_id || 0);
  const [citiesFilter, setCitiesFilter] = useState(
    cities.filter((c) => c?.province_id === address?.province_id)
  );
  
  const [cityId, setCityId] = useState(address?.city_id || 0);

  // وضعیت تغییر داده‌ها
  const [isChanged, setIsChanged] = useState(false);

  // بررسی تغییرات فرم نسبت به مقدار اولیه
  const checkChanged = useCallback(
    (values) => {
      const changed =
        values.title !== address.title ||
        values.phone !== address.cellphone ||
        values.postal_code !== address.postal_code ||
        values.address !== address.address ||
        provinceId !== address.province_id ||
        cityId !== address.city_id;

      setIsChanged(changed);
    },
    [provinceId, cityId, address]
  );

  // تغییر استان
  const handleProvinceChange = (e) => {
    const pid = Number(e.target.value);
    setProvinceId(pid);

    const filtered = cities.filter((c) => c?.province_id === pid);
    setCitiesFilter(filtered);
    setCityId(filtered[0]?.id || 0);

    setIsChanged(true);
  };

  // سابمیت: فقط لاگ
  const handleSubmit = (values, { setSubmitting }) => {
    const payload = {
      ...values,
      province_id: provinceId,
      city_id: cityId,
      address_id: address.id,
    };
    // console.log("Edited Address Payload:", payload);
    setSubmitting(false);
  };
  //delete address
  const handleDeleteAddress=async(id)=>{
    console.log("iiiiiiiiiiiiiiiiid",id);
    const result= await UserAddressDeleteForm(id);
    console.log("result",result);
     if (result.success) {
          toast.success(result.message || "آدرس  با موفقیت حذف گردید", {
            position: "bottom-right",
            autoClose: 2000,
            theme: "colored",
          });
          router.refresh();
        } else {
          toast.error(result.message || "مشکلی پیش آمده است لطفا بعدا تلاش کنید", {
            position: "bottom-right",
            autoClose: 2000,
            theme: "colored",
          });
          router.refresh();
        }
      
    
  }
  return (
    <Formik
      initialValues={{
        title: address.title,
        phone: address.cellphone,
        postal_code: address.postal_code,
        address: address.address,
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, isSubmitting }) => {
        useEffect(() => {
          checkChanged(values);
        }, [values, checkChanged]);

        return (
          <Form>
            <div className="row g-3">
              {/* عنوان */}
              <div className="col-12 col-md-6">
                <label className="form-label">عنوان</label>
                <Field type="text" name="title" className="form-control" />
                <ErrorMessage name="title" className="text-danger" component="div" />
              </div>

              {/* شماره تماس */}
              <div className="col-12 col-md-6">
                <label className="form-label">شماره تماس</label>
                <Field type="text" name="phone" className="form-control" />
                <ErrorMessage name="phone" className="text-danger" component="div" />
              </div>

              {/* کد پستی */}
              <div className="col-12 col-md-6">
                <label className="form-label">کد پستی</label>
                <Field type="text" name="postal_code" className="form-control" />
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
                  onChange={handleProvinceChange}
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
                  onChange={(e) => {
                    setCityId(Number(e.target.value));
                    setIsChanged(true);
                  }}
                >
                  {citiesFilter.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* آدرس */}
              <div className="col-12">
                <label className="form-label">آدرس</label>
                <Field as="textarea" rows="5" name="address" className="form-control" />
                <ErrorMessage name="address" className="text-danger" component="div" />
              </div>
            </div>

            {/* دکمه‌ها */}
            <div className="d-flex justify-content-between mt-4">
              <button type="button" className="btn btn-danger" onClick={()=>handleDeleteAddress(address.id)}>
                حذف
              </button>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting || !isChanged}
              >
                {isSubmitting ? "در حال ثبت..." : "ویرایش"}
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
