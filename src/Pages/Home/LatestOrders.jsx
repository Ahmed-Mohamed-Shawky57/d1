// // // components/OrderStatusChart.jsx
// // import React from "react";
// // import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

// // const COLORS = ["#22c55e", "#f1c40f", "#e74c3c"];

// // export default function OrderStatusChart({ data, lang }) {
// //   const chartData = [
// //     { name: lang === "en" ? "Success" : "ناجح", value: data.success },
// //     { name: lang === "en" ? "Pending" : "قيد الانتظار", value: data.pending },
// //     { name: lang === "en" ? "Failed" : "فشل", value: data.failed },
// //   ];

// //   return (
// //     <div className="bg-white rounded-lg p-6 shadow-sm">
// //       <h3 className="font-semibold mb-4">
// //         {lang === "en" ? "Order Status" : "حالة الطلب"}
// //       </h3>
// //       <div style={{ width: "100%", height: 220 }}>
// //         <ResponsiveContainer>
// //           <PieChart>
// //             <Pie
// //               data={chartData}
// //               dataKey="value"
// //               innerRadius={50}
// //               outerRadius={80}
// //               label
// //             >
// //               {chartData.map((entry, index) => (
// //                 <Cell key={`cell-${index}`} fill={COLORS[index]} />
// //               ))}
// //             </Pie>
// //             <Legend />
// //           </PieChart>
// //         </ResponsiveContainer>
// //       </div>
// //     </div>
// //   );
// // }

// import React from "react";

// export default function LatestOrders({ orders = [], lang }) {
//   return (
//     <div className="bg-white rounded-lg p-6 shadow-sm overflow-x-auto">
//       <h3 className="font-semibold mb-4">
//         {lang === "en" ? "Latest Orders" : "أحدث الطلبات"}
//       </h3>
//       <table className="min-w-full border-collapse border border-gray-200">
//         <thead>
//           <tr>
//             <th className="border px-2 py-1">
//               {lang === "en" ? "ID" : "الرقم"}
//             </th>
//             <th className="border px-2 py-1">
//               {lang === "en" ? "Date" : "التاريخ"}
//             </th>
//             <th className="border px-2 py-1">
//               {lang === "en" ? "Customer" : "العميل"}
//             </th>
//             <th className="border px-2 py-1">
//               {lang === "en" ? "Status" : "الحالة"}
//             </th>
//             <th className="border px-2 py-1">
//               {lang === "en" ? "Amount" : "المبلغ"}
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {orders.length === 0 ? (
//             <tr>
//               <td colSpan="5" className="text-center py-4">
//                 {lang === "en" ? "No orders yet" : "لا يوجد طلبات بعد"}
//               </td>
//             </tr>
//           ) : (
//             orders.map((order) => (
//               <tr key={order.id}>
//                 <td className="border px-2 py-1">{order.id}</td>
//                 <td className="border px-2 py-1">{order.date}</td>
//                 <td className="border px-2 py-1">{order.customer}</td>
//                 <td className="border px-2 py-1">{order.status}</td>
//                 <td className="border px-2 py-1">{order.amount}</td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }import React from "react";

import React from "react";

export default function LatestOrders({ language }) {
  const containerStyle = {
    marginTop: "20px",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    overflowX: "auto",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
  };

  const thTdStyle = {
    border: "1px solid #ddd",
    padding: "8px",
    textAlign: "left",
  };

  const orders = [
    { id: 1, customer: "John Doe", status: "Shipped", total: "$120" },
    { id: 2, customer: "Jane Smith", status: "Pending", total: "$80" },
    { id: 3, customer: "Ali Ahmed", status: "Delivered", total: "$200" },
  ];

  return (
    <div style={containerStyle}>
      <h3>{language === "en" ? "Latest Orders" : "أحدث الطلبات"}</h3>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thTdStyle}>{language === "en" ? "ID" : "الرقم"}</th>
            <th style={thTdStyle}>
              {language === "en" ? "Customer" : "العميل"}
            </th>
            <th style={thTdStyle}>{language === "en" ? "Status" : "الحالة"}</th>
            <th style={thTdStyle}>
              {language === "en" ? "Total" : "الإجمالي"}
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td style={thTdStyle}>{order.id}</td>
              <td style={thTdStyle}>{order.customer}</td>
              <td style={thTdStyle}>{order.status}</td>
              <td style={thTdStyle}>{order.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
