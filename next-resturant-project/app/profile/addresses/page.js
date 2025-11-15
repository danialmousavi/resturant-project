import React from "react";
import CreateForm from "@/components/profile/addresses/CreateForm";
import EditForm from "@/components/profile/addresses/EditForm";
import { cookies } from "next/headers";

export default async function page() {
  const token = cookies().get("Token")?.value;

  if (!token) return <p>توکن یافت نشد</p>;

  const res = await fetch("http://localhost:8000/api/profile/addresses", {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  const provinces = data?.data?.provinces || [];
  const cities = data?.data?.cities || [];
  const addresses = data?.data?.addresses || []; // توجه: لیست آدرس‌ها

  return (
    <>
      {provinces.length > 0 && cities.length > 0 ? (
        <>
          <CreateForm provinces={provinces} cities={cities} />
          <hr />

          {addresses.length > 0 ? (
            addresses.map((addr) => (
              <div key={addr.id} className="mb-4 p-3 border rounded">
                <EditForm
                  address={addr}
                  provinces={provinces}
                  cities={cities}
                  token={token}
                />
              </div>
            ))
          ) : (
            <p>هیچ آدرسی برای ویرایش موجود نیست</p>
          )}
        </>
      ) : (
        <p>داده‌های استان و شهر موجود نیست</p>
      )}
    </>
  );
}
