// // // components/SalesChart.jsx
// // import React from "react";
// // import {
// //   AreaChart,
// //   Area,
// //   XAxis,
// //   YAxis,
// //   CartesianGrid,
// //   Tooltip,
// //   ResponsiveContainer,
// // } from "recharts";

// // export default function SalesChart({ data, lang }) {
// //   return (
// //     <div className="bg-white rounded-lg p-6 shadow-sm">
// //       <div className="flex items-center justify-between mb-4">
// //         <h3 className="font-semibold">
// //           {lang === "en" ? "Sales Details" : "تفاصيل المبيعات"}
// //         </h3>
// //         <select className="border rounded px-2 py-1 text-sm">
// //           <option>October</option>
// //           <option>September</option>
// //         </select>
// //       </div>
// //       <div style={{ width: "100%", height: 260 }}>
// //         <ResponsiveContainer>
// //           <AreaChart
// //             data={data}
// //             margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
// //           >
// //             <defs>
// //               <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
// //                 <stop offset="5%" stopColor="#22c55e" stopOpacity={0.2} />
// //                 <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
// //               </linearGradient>
// //             </defs>
// //             <XAxis dataKey="day" hide />
// //             <YAxis hide />
// //             <CartesianGrid strokeDasharray="3 3" />
// //             <Tooltip />
// //             <Area
// //               type="monotone"
// //               dataKey="value"
// //               stroke="#22c55e"
// //               fillOpacity={1}
// //               fill="url(#colorValue)"
// //             />
// //           </AreaChart>
// //         </ResponsiveContainer>
// //       </div>
// //     </div>
// //   );
// // }
// import React from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// export default function SalesChart({ data = [], lang }) {
//   return (
//     <div className="bg-white rounded-lg p-6 shadow-sm">
//       <h3 className="font-semibold mb-4">
//         {lang === "en" ? "Sales Over Time" : "المبيعات مع الوقت"}
//       </h3>
//       <div style={{ width: "100%", height: 250 }}>
//         <ResponsiveContainer>
//           <LineChart data={data}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="day" />
//             <YAxis />
//             <Tooltip />
//             <Line type="monotone" dataKey="value" stroke="#3b82f6" />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// }import React from "react";

export default function SalesChart({ language }) {
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
      <h3>{language === "en" ? "Sales Chart" : "مخطط المبيعات"}</h3>
      <p>📊 Chart placeholder</p>
    </div>
  );
}
