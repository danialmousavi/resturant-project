import ProgressProviders from "@/components/libs/ProgressBarProvider";
import "./globals.css";
import Bootstrap from "@/components/libs/Bootstrap";
import ToastContainer from "@/components/libs/Toastify";
import Header from "@/components/modules/Header/Header";
import Sidebar from "@/components/modules/Sidebar/Sidebar";

export const metadata = {
  title: "Admin Panel",
  description: "Restuarant admin panel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <ProgressProviders>
          <Header />
          <div class="container-fluid">
            <div class="row">
              <Sidebar />

              <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-4">
                {children}
              </main>
            </div>
          </div>

          <ToastContainer />
          <Bootstrap />
        </ProgressProviders>
      </body>
    </html>
  );
}
