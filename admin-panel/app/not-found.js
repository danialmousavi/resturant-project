import Link from "next/link";
import styles from "@/styles/notfound.module.css"; // ایمپورت ماژول CSS

export default function AdminNotFound() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.cardWrapper}>
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="96"
                height="96"
                fill="currentColor"
                className={styles.icon}
                viewBox="0 0 16 16"
              >
                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.964 0L.165 13.233c-.457.778.091 1.767.982 1.767h13.706c.89 0 1.438-.99.982-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1-2.002 0 1 1 0 0 1 2.002 0z" />
              </svg>
            </div>

            <h1 className={styles.title}>صفحه مورد نظر پیدا نشد</h1>
            <p className={styles.description}>
              ممکن است لینک اشتباه باشد یا صفحه حذف شده باشد.
            </p>

            <div className={styles.buttons}>
              <Link href="/" className={`${styles.btn} ${styles.primary}`}>
                بازگشت به داشبورد
              </Link>
            </div>

            <div className={styles.note}>
              اگر فکر می‌کنید خطا از سمت سیستم است، با پشتیبانی تماس بگیرید.
            </div>
          </div>

          <div className={styles.errorCode}>
            کد خطا: <strong>404</strong>
          </div>
        </div>
      </div>
    </main>
  );
}
