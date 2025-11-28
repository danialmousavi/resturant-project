import Link from "next/link";
import { getBlurDataURL, numberFormat } from "@/utils/helper";
import Image from "next/image";
import Paginate from "../modules/paginate/paginate";
import { cookies } from "next/headers";

export default async function Table({ params }) {
    
 let coupons = [];
  let meta = null;
  let error = null;

  try {
    // چک کردن توکن
    const token = cookies().get("Token")?.value;
    if (!token) {
      throw new Error("توکن یافت نشد. لطفا مجددا وارد شوید.");
    }

    // درخواست به سرور
    const res = await fetch(
      `http://localhost:8000/api/admin-panel/coupons?${params}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    
    // وضعیت غیر 200
    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      throw new Error(errData?.message || "خطا در دریافت اطلاعات از سرور");
    }

    const data = await res.json();
    console.log("data coupons",data);
    
    // بررسی ساختار API
    if (!data?.data || !data?.data?.coupons) {
      throw new Error("ساختار داده دریافتی نامعتبر است");
    }
    
    coupons = data.data.coupons;
    meta = data.data.meta;
    
} catch (err) {
    error = err.message || "خطای ناشناخته رخ داد";
}

    return (
        <>
            <div className="table-responsive">
                <table className="table align-middle">
                    <thead>
                        <tr>
                            <th>کد</th>
                            <th>درصد</th>
                            <th>تاریخ انقضا</th>
                            <th>تاریخ ایجاد</th>
                            <th>عملیات</th>
                        </tr>
                    </thead>
                    <tbody>
                        {coupons.map(coupon => (
                            <tr key={coupon.id}>
                                <td>{coupon.code}</td>
                                <td>{coupon.percentage}</td>
                                <td>{coupon.expired_at}</td>
                                <td>{coupon.created_at}</td>
                                <td>
                                    <div className="d-flex">
                                        <Link href={`/coupons/${coupon.id}`} className="btn btn-sm btn-outline-dark me-2"> نمایش </Link>
                                        <Link href={`/coupons/edit/${coupon.id}`} className="btn btn-sm btn-dark"> ویرایش </Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Paginate links={meta.links} />
        </>
    )
}