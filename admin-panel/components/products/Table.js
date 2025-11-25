import Link from "next/link";
import Paginate from "../modules/paginate/paginate";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Image from "next/image";
import { getBlurDataURL, numberFormat } from "@/utils/helper";

export default async function Table({ params }) {
  let products = [];
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
      `http://localhost:8000/api/admin-panel/products?${params}`,
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
    if (!data?.data || !data?.data?.products) {
      throw new Error("ساختار داده دریافتی نامعتبر است");
    }

    products = data.data.products;
    meta = data.data.meta;

  } catch (err) {
    error = err.message || "خطای ناشناخته رخ داد";
  }

  return (
    <>
      {error && (
        <div className="alert alert-danger text-center my-3">
          {error}
        </div>
      )}

      <div className="table-responsive">
        <table className="table align-middle">
                             <thead>
                        <tr>
                            <th>تصویر</th>
                            <th>نام</th>
                            <th>دسته بندی</th>
                            <th>قیمت</th>
                            <th>تعداد</th>
                            <th>وضعیت</th>
                            <th>عملیات</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={product.id}>
                                <td><Image src={product.primary_image} placeholder="blur" blurDataURL={getBlurDataURL()} width={80} height={53} alt="product-image" /></td>
                                <td>{product.name}</td>
                                <td>{product.category}</td>
                                <td>{numberFormat(product.price)}</td>
                                <td>{product.quantity}</td>
                                <td>{product.status}</td>
                                <td>
                                    <div className="d-flex">
                                        <Link href={`/products/${product.id}`} className="btn btn-sm btn-outline-dark me-2"> نمایش </Link>
                                        <Link href={`/products/edit/${product.id}`} className="btn btn-sm btn-dark"> ویرایش </Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
        </table>
      </div>

      {meta?.links && <Paginate links={meta.links} />}
    </>
  );
}
