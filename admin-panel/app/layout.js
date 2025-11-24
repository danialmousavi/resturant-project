import "./globals.css";

export const metadata = {
  title: "Admin Panel",
  description: "Restaurant admin panel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
