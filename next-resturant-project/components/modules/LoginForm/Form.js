import React from "react";
import styles from "@/styles/login.module.css";

export default function Form() {
  return (
    <form>
      <div className="mb-3 text-start">
        <label className="form-label fw-semibold text-dark">شماره موبایل</label>
        <input
          type="text"
          className={`form-control form-control-lg text-center ${styles.input}`}
          placeholder="مثلاً 09123456789"
        />
      </div>

      <button
        type="submit"
        className={`btn btn-warning w-100 py-2 mt-3 rounded-3 fw-semibold ${styles.btnAuth}`}
      >
        ورود
      </button>
    </form>
  );
}
