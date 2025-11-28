import Link from "next/link";
import { getBlurDataURL, numberFormat } from "@/utils/helper";
import Image from "next/image";
import Paginate from "../modules/paginate/paginate";
import { cookies } from "next/headers";

export default async function Table({ params }) {
    
 let transactions = [];
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
      `http://localhost:8000/api/admin-panel/transactions?${params}`,
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
    console.log(data);
    
    // بررسی ساختار API
    if (!data?.data || !data?.data?.transactions) {
      throw new Error("ساختار داده دریافتی نامعتبر است");
    }
    
    transactions = data.data.transactions;
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
                            <th>شماره سفارش</th>
                            <th>وضعیت</th>
                            <th>مبلغ</th>
                            <th>تاریخ ایجاد</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map(transaction => (
                            <tr key={transaction.id}>
                                <td>{transaction.order_id}</td>
                                <td>{transaction.status}</td>
                                <td>{numberFormat(transaction.amount)} تومان</td>
                                <td>{transaction.created_at}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Paginate links={meta.links} />
        </>
    )
}