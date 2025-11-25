"use client"
import React from "react";

export default function CreateProduct({categories}) {
    console.log("categories",categories);
    
  return (
    <>
      <form  className="row gy-4">
        <div className="col-md-3">
          <label className="form-label">نام</label>
          <input name="name" type="text" className="form-control" />
        </div>
        <div className="col-md-3">
          <label className="form-label">ایمیل</label>
          <input name="email" type="text" className="form-control" />
        </div>
        <div className="col-md-3">
          <label className="form-label">شماره تماس</label>
          <input name="cellphone" type="text" className="form-control" />
        </div>
        <div className="col-md-3">
          <label className="form-label">رمز عبور</label>
          <input name="password" type="text" className="form-control" />
        </div>
        <div>
          {/* <SubmitButton title="ایجاد کاربر" style="btn btn-outline-dark mt-3" /> */}
        </div>
      </form>
    </>
  );
}
