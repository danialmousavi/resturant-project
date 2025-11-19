"use client";

import { getAddresses } from "@/utils/actions/GetAddress";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Address({ setAddressId }) {
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const fetchAddresses = async () => {
      const res = await getAddresses();


      // اگر خطا بود
      if (!res.success) {
        setErrorMsg(res.message || "خطا در دریافت آدرس‌ها");
        setLoading(false);
        return;
      }

      // اگر موفق بود
      setAddresses(res.data || []);
      setLoading(false);
    };

    fetchAddresses();
  }, []);

  // لودینگ
  if (loading) {
    return <div className="spinner-border spinner-border-sm ms-2"></div>;
  }

  // اگر خطا بود
  if (errorMsg) {
    return (
      <div className="alert alert-danger">
        {errorMsg}
      </div>
    );
  }

  // اگر هیچ آدرسی وجود نداشت
  if (addresses.length === 0) {
    return (
      <Link href="/profile/addresses" className="btn btn-primary">
        ایجاد آدرس
      </Link>
    );
  }

  // حالت عادی
  return (
    <>
      <div>انتخاب آدرس</div>

      <select
        onChange={(e) => setAddressId(e.target.value)}
        defaultValue=""
        style={{ width: "200px" }}
        className="form-select ms-3"
      >
        <option value="" disabled>
          انتخاب آدرس
        </option>

        {addresses.map((address) => (
          <option key={address.id} value={address.id}>
            {address.title}
          </option>
        ))}
      </select>
    </>
  );
}
