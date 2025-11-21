import ProgressProviders from "@/components/libs/ProgressBarProvider";
import "./globals.css";
import Bootstrap from "@/components/libs/Bootstrap";
import  ToastContainer from "@/components/libs/Toastify";


export const metadata = {
  title: "Admin Panel",
  description: "Restuarant admin panel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <ProgressProviders>

          {children}

          <ToastContainer />
          <Bootstrap />
        </ProgressProviders>
      </body>
    </html>
  );
}
