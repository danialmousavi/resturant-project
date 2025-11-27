import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Paginate from "../modules/paginate/paginate";

export default async function Table({ params }) {
  let categories = [];
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
      `http://localhost:8000/api/admin-panel/categories?${params}`,
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
    if (!data?.data || !data?.data?.categories) {
      throw new Error("ساختار داده دریافتی نامعتبر است");
    }

    categories = data.data.categories;
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
                            <th>نام</th>
                            <th>توضیحات</th>
                            <th>عملیات</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map(category => (
                            <tr key={category.id}>
                                <td>{category.name}</td>
                                <td>{category.description}</td>
                                <td>
                                    <div className="d-flex">
                                        <Link href={`/categories/${category.id}`} className="btn btn-sm btn-outline-dark me-2"> نمایش </Link>
                                        <Link href={`/categories/edit/${category.id}`} className="btn btn-sm btn-dark"> ویرایش </Link>
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
