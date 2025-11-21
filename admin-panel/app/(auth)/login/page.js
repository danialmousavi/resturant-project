import React from "react";

export default function page() {
  return (
    <>
      <div className="row mt-5 justify-content-center align-items-center">
        <div className="col-md-3">
          <div className="card">
            <div className="card-body py-5">
              <h4 className="mb-5 text-center">ورود به پنل ادمین</h4>
              <div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    ایمیل
                  </label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    رمز عبور
                  </label>
                  <input type="password" className="form-control" />
                </div>
                <button type="submit" className="btn btn-dark">
                  ورود
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
