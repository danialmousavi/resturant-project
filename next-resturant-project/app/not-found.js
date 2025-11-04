"use client";
import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 text-center notfound-bg">
      <div className="p-5 rounded-4 shadow-lg bg-white" style={{ maxWidth: "500px" }}>
        <h1 className="display-1 fw-bold text-warning mb-2" style={{ color: "#e69c00" }}>
          404
        </h1>
        <h2 className="fw-semibold mb-3" style={{ color: "#e69c00" }}>
          صفحه مورد نظر یافت نشد
        </h2>
        <p className="text-muted mb-4">
          ممکن است لینک اشتباه باشد یا صفحه حذف شده باشد.<br />
          به منوی خوشمزه ما سر بزن 🍔
        </p>

        <Link
          href="/"
          className="btn px-4 py-2 rounded-pill fw-semibold shadow-sm"
          style={{
            backgroundColor: "#ffbe33",
            color: "#fff",
            border: "none",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#e69c00")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#ffbe33")}
        >
          بازگشت به صفحه اصلی
        </Link>
      </div>

      <div className="mt-5">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
          alt="404 food icon"
          width={120}
          height={120}
          className="opacity-75"
        />
      </div>

      <style jsx>{`
        .notfound-bg {
          background: linear-gradient(135deg, #ffbe33 0%, #e69c00 100%);
        }
      `}</style>
    </div>
  );
}
