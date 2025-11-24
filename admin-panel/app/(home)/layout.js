import ProgressProviders from "@/components/libs/ProgressBarProvider";
import Bootstrap from "@/components/libs/Bootstrap";
import ToastContainer from "@/components/libs/Toastify";
import Header from "@/components/modules/Header/Header";
import Sidebar from "@/components/modules/Sidebar/Sidebar";
import { Suspense } from "react";
import { AuthProvider } from "@/utils/context/AuthContext";

export const metadata = {
  title: "Admin Panel",
  description: "Restuarant admin panel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Suspense>
          <AuthProvider>
            <ProgressProviders>
              <Header />
              <div className="container-fluid">
                <div className="row">
                  <Sidebar />

                  <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-4">
                    {children}
                  </main>
                </div>
              </div>

              <ToastContainer />
              <Bootstrap />
            </ProgressProviders>
          </AuthProvider>
        </Suspense>
      </body>
    </html>
  );
}
