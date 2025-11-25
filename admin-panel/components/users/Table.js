import Link from "next/link";
import Paginate from "../modules/paginate/paginate";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Table({ params }) {
  let users = [];
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
      `http://localhost:8000/api/admin-panel/users?${params}`,
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
    if (!data?.data || !data?.data?.users) {
      throw new Error("ساختار داده دریافتی نامعتبر است");
    }

    users = data.data.users;
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
              <th>ایمیل</th>
              <th>شماره تلفن</th>
              <th>تاریخ عضویت</th>
              <th>عملیات</th>
            </tr>
          </thead>

          <tbody>
            {users.length === 0 && !error && (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  هیچ کاربری یافت نشد.
                </td>
              </tr>
            )}

            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.cellphone}</td>
                <td>{user.created_at}</td>
                <td>
                  <div className="d-flex">
                    <Link href={`users/${user.id}`} className="btn btn-sm btn-outline-dark me-2">
                      نمایش
                    </Link>
                    <Link href={`users/edit/${user.id}`} className="btn btn-sm btn-dark">
                      ویرایش
                    </Link>
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
