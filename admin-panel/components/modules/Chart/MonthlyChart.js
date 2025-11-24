"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function MonthlyChart({ data }) {
  return (
    <div className="card shadow-sm">
      <div className="card-body">

        <h4 className="mb-4 text-center">نمودار فروش ماهانه</h4>

        {/* حتماً باید height ثابت داشته باشد */}
        <div style={{ width: "100%", height: "350px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="value"
                fill="#0d6efd" // رنگ آبی Bootstrap
                radius={[5, 5, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  );
}
