// // components/OrderStatusChart.jsx
// import React from "react";
// import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

// const COLORS = ["#22c55e", "#f1c40f", "#e74c3c"];

// export default function OrderStatusChart({ data, lang }) {
//   const chartData = [
//     { name: lang === "en" ? "Success" : "ناجح", value: data.success },
//     { name: lang === "en" ? "Pending" : "قيد الانتظار", value: data.pending },
//     { name: lang === "en" ? "Failed" : "فشل", value: data.failed },
//   ];

//   return (
//     <div className="bg-white rounded-lg p-6 shadow-sm">
//       <h3 className="font-semibold mb-4">
//         {lang === "en" ? "Order Status" : "حالة الطلب"}
//       </h3>
//       <div style={{ width: "100%", height: 220 }}>
//         <ResponsiveContainer>
//           <PieChart>
//             <Pie
//               data={chartData}
//               dataKey="value"
//               innerRadius={50}
//               outerRadius={80}
//               label
//             >
//               {chartData.map((entry, index) => (
//                 <Cell key={`cell-${index}`} fill={COLORS[index]} />
//               ))}
//             </Pie>
//             <Legend />
//           </PieChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// }

// import React from "react";
// import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

// const COLORS = ["#22c55e", "#f1c40f", "#e74c3c"];

// export default function OrderStatusChart({
//   data = { success: 0, pending: 0, failed: 0 },
//   lang,
// }) {
//   const chartData = [
//     { name: lang === "en" ? "Success" : "ناجح", value: data.success || 0 },
//     {
//       name: lang === "en" ? "Pending" : "قيد الانتظار",
//       value: data.pending || 0,
//     },
//     { name: lang === "en" ? "Failed" : "فشل", value: data.failed || 0 },
//   ];

//   return (
//     <div className="bg-white rounded-lg p-6 shadow-sm">
//       <h3 className="font-semibold mb-4">
//         {lang === "en" ? "Order Status" : "حالة الطلب"}
//       </h3>
//       <div style={{ width: "100%", height: 220 }}>
//         <ResponsiveContainer>
//           <PieChart>
//             <Pie
//               data={chartData}
//               dataKey="value"
//               innerRadius={50}
//               outerRadius={80}
//               label
//             >
//               {chartData.map((entry, index) => (
//                 <Cell key={`cell-${index}`} fill={COLORS[index]} />
//               ))}
//             </Pie>
//             <Legend />
//           </PieChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// }import React from "react";

export default function OrderStatusChart({ language }) {
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
      <h3>{language === "en" ? "Order Status Chart" : "مخطط حالة الطلبات"}</h3>
      <p>📊 Chart placeholder</p>
    </div>
  );
}
