import Link from "next/link";
import { getBlurDataURL, numberFormat } from "@/utils/helper";
import Image from "next/image";
import Paginate from "../modules/paginate/paginate";
import { cookies } from "next/headers";

export default async function Table({ params }) {
    
 let orders = [];
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
      `http://localhost:8000/api/admin-panel/orders?${params}`,
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

    // بررسی ساختار API
    if (!data?.data || !data?.data?.orders) {
      throw new Error("ساختار داده دریافتی نامعتبر است");
    }
    
    orders = data.data.orders;
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
                            <th>وضعیت پرداخت</th>
                            <th>مبلغ پرداختی</th>
                            <th>تاریخ ایجاد</th>
                            <th>محصولات</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => (
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>{order.status}</td>
                                <td>{order.payment_status}</td>
                                <td>{numberFormat(order.paying_amount)} تومان</td>
                                <td>{order.created_at}</td>
                                <td>
                                    <button type="button" data-bs-target={`#modal-${order.id}`} className="btn btn-sm btn-dark" data-bs-toggle="modal">
                                        نمایش
                                    </button>

                                    <div className="modal fade" id={`modal-${order.id}`}>
                                        <div className="modal-dialog modal-lg">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h6 className="modal-title">محصولات سفارش
                                                        شماره {order.id}</h6>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                        aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <table className="table align-middle">
                                                        <thead>
                                                            <tr>
                                                                <th>محصول</th>
                                                                <th>نام</th>
                                                                <th>قیمت</th>
                                                                <th>تعداد</th>
                                                                <th>قیمت کل</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {order.order_items.map((item) => (
                                                                <tr key={item.id}>
                                                                    <th>
                                                                        <Image src={item.product_primary_image} placeholder="blur" blurDataURL={getBlurDataURL()} width={80} height={53} alt="image-product" />
                                                                    </th>
                                                                    <td className="fw-bold">{item.product_name}</td>
                                                                    <td>{numberFormat(item.price)} تومان</td>
                                                                    <td>
                                                                        {item.quantity}
                                                                    </td>
                                                                    <td>{numberFormat(item.subtotal)} تومان</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
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