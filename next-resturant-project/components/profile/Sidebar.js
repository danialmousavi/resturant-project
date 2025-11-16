"use client";
import { LogoutAction } from "@/utils/actions/Auth";
import AuthContext from "@/utils/context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { toast } from "react-toastify";

export default function Sidebar() {
  const { logOutContext } = useContext(AuthContext);
  const router=useRouter();
  const handleLogOut = async () => {
    const result = await LogoutAction();
    logOutContext();
    if (result.success) {
      toast.success(result.message || "شما خارج شدید", {
        position: "bottom-right",
        autoClose: 2000,
        theme: "colored",
      });
      router.replace("/")
    } else {
      toast.error(result.message || "متاسفیم مشکلی پیش آمده بعدا تلاش کنید", {
        position: "bottom-right",
        autoClose: 2000,
        theme: "colored",
      });
    }
  };
  return (
    <div className="col-sm-12 col-lg-3">
      <ul className="list-group">
        <li className="list-group-item">
          <Link href="/profile">اطلاعات کاربر</Link>
        </li>
        <li className="list-group-item">
          <Link href="/profile/addresses">آدرس ها</Link>
        </li>
        <li className="list-group-item">
          <Link href="/profile/orders">سفارشات</Link>
        </li>
        <li className="list-group-item">
          <Link href="/profile/transactions">تراکنش ها</Link>
        </li>
        <li className="list-group-item">
          <a href="#" onClick={handleLogOut}>
            خروج
          </a>
        </li>
      </ul>
    </div>
  );
}
