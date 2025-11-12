"use client";

import heroImage from "@/public/images/hero-bg.jpg";
import AuthContext from "@/utils/context/AuthContext";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useEffect } from "react";

export default function Header() {
  const pathname = usePathname();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const navbarCollapse = document.getElementById("navbarSupportedContent");
    const toggler = document.querySelector(".navbar-toggler");

    // وقتی مسیر تغییر کرد، منو رو ببند و آیکون رو برگردون
    if (navbarCollapse?.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
    }

    if (toggler?.getAttribute("aria-expanded") === "true") {
      toggler.setAttribute("aria-expanded", "false");
      toggler.classList.add("collapsed"); // بوت‌استرپ با این کلاس آیکون رو سه‌خطه می‌کنه
    }
  }, [pathname]);

  return (
    <div className={pathname === "/" ? "" : "sub_page"}>
      <div className="hero_area">
        <div className="bg-box">
          <Image src={heroImage} priority alt="hero-image" />
        </div>

        <header className="header_section">
          <div className="container">
            <nav className="navbar navbar-expand-lg custom_nav-container">
              <Link className="navbar-brand" href="/">
                <span>Resturant</span>
              </Link>

              <button
                className="navbar-toggler collapsed" // حتما از collapsed شروع کن
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mx-auto">
                  <li
                    className={pathname == "/" ? "nav-item active" : "nav-item"}
                  >
                    <Link className="nav-link" href="/">
                      صفحه اصلی
                    </Link>
                  </li>
                  <li
                    className={
                      pathname == "/menu" ? "nav-item active" : "nav-item"
                    }
                  >
                    <Link className="nav-link" href="/menu">
                      منو
                    </Link>
                  </li>
                  <li
                    className={
                      pathname == "/about" ? "nav-item active" : "nav-item"
                    }
                  >
                    <Link className="nav-link" href="/about">
                      درباره ما
                    </Link>
                  </li>
                  <li
                    className={
                      pathname == "/contact" ? "nav-item active" : "nav-item"
                    }
                  >
                    <Link className="nav-link" href="/contact">
                      تماس با ما
                    </Link>
                  </li>
                </ul>

                <div className="user_option">
                  <a className="cart_link position-relative" href="cart.html">
                    <i className="bi bi-cart-fill text-white fs-5"></i>
                    <span className="position-absolute top-0 translate-middle badge rounded-pill">
                      3
                    </span>
                  </a>
                  {user ? (
                    <Link href="/profile" className="btn-auth">
                      پروفایل
                    </Link>
                  ) : (
                    <Link href="/auth/login" className="btn-auth">
                      ورود
                    </Link>
                  )}
                </div>
              </div>
            </nav>
          </div>
        </header>

        {pathname === "/" && (
          <section className="slider_section">
            {/* اسلایدر ... */}
          </section>
        )}
      </div>
    </div>
  );
}
