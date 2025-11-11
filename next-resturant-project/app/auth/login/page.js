"use client"
import React, { useState } from "react";
    import styles from "@/styles/login.module.css";
    import Link from "next/link";
    import Form from "@/components/modules/LoginForm/Form";
    import CheckOtp from "@/components/modules/LoginForm/CheckOtp";

    export default function LoginPage() {
        const [step,setStep]=useState(1)
    return (
        <section className={`${styles.authSection}`}>
        <div className="container">
            <div className="row justify-content-center align-items-center min-vh-100">
            <div className="col-md-5">
                <div className={`${styles.cardBox} text-center p-4`}>
                <h2 className={`${styles.title} mb-4`}>ورود به حساب کاربری</h2>
                <p className="text-muted mb-4">
                  {step==1?"  برای ورود ، شماره موبایل خود را وارد کنید 🍔":"  برای ورود ، کد ارسال شده به شماره تماس را وارد کنید🍔"}
                </p>
                {step==1&&(
                    <Form setStep={setStep}/>
                )}
                {step==2&&(
                    <CheckOtp/>
                )}
                <div className="mt-4">
                    <Link href="/" className={styles.backLink}>
                    بازگشت به صفحه اصلی
                    </Link> 
                </div>
                </div>

                <div className="text-center mt-4">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
                    alt="404 food icon"
                    width={120}
                    height={120}
                    className="opacity-75"
                />
                </div>
            </div>
            </div>
        </div>
        </section>
    );
    }
