import MonthlyChart from "@/components/modules/Chart/MonthlyChart";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const token = cookies().get("Token")?.value;
  if (!token) {
    redirect("/login");
  }
  const res = await fetch(
    "http://localhost:8000/api/admin-panel/transactions/chart",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await res.json();
  console.log("chart data", data);

  return (
    <>
      <div className="container mt-4">
        <MonthlyChart data={data.data} />
      </div>
    </>
  );
}
