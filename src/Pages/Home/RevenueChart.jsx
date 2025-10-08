// // components/RevenueChart.jsx
// import React from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// export default function RevenueChart({ data, lang }) {
//   return (
//     <div className="bg-white rounded-lg p-6 shadow-sm">
//       <div className="flex items-center justify-between mb-4">
//         <h3 className="font-semibold">
//           {lang === "en" ? "Total Revenue" : "إجمالي الإيرادات"}
//         </h3>
//         <select className="border rounded px-2 py-1 text-sm">
//           <option>{lang === "en" ? "This Month" : "هذا الشهر"}</option>
//         </select>
//       </div>
//       <div style={{ width: "100%", height: 240 }}>
//         <ResponsiveContainer>
//           <BarChart
//             data={data}
//             margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
//           >
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Bar dataKey="wholesale" fill="#22c55e" />
//             <Bar dataKey="retail" fill="#f1c40f" />
//             <Bar dataKey="farmer" fill="#e74c3c" />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// }
import React from "react";

export default function RevenueChart({ language }) {
  const chartStyle = {
    flex: "1 1 300px",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    minHeight: "200px",
  };

  return (
    <div style={chartStyle}>
      <h3>{language === "en" ? "Revenue Chart" : "مخطط الإيرادات"}</h3>
      <p>📊 Chart placeholder</p>
    </div>
  );
}
