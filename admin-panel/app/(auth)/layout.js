import ProgressProviders from "@/components/libs/ProgressBarProvider";
import "./globals.css";
import Bootstrap from "@/components/libs/Bootstrap";
import ToastContainer from "@/components/libs/Toastify";
import Header from "@/components/modules/Header/Header";
import { Suspense } from "react";

export const metadata = {
  title: "Admin Panel",
  description: "Restuarant admin panel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Suspense>
          <ProgressProviders>
            <Header />
            {children}
            <ToastContainer />
            <Bootstrap />
          </ProgressProviders>
        </Suspense>
      </body>
    </html>
  );
}
