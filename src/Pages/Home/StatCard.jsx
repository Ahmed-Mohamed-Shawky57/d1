// // components/StatCard.jsx
// import React from "react";

// export default function StatCard({ title, value, change }) {
//   const changeColor = change >= 0 ? "text-green-600" : "text-red-600";
//   return (
//     <div className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-between">
//       <div>
//         <div className="text-xs text-gray-500">{title}</div>
//         <div className="text-xl font-semibold">{value}</div>
//       </div>
//       <div className="text-right">
//         <div className={`${changeColor} text-sm`}>
//           {change >= 0 ? `▲ ${Math.abs(change)}%` : `▼ ${Math.abs(change)}%`}
//         </div>
//         <div className="text-xs text-gray-400">
//           {change >= 0 ? "Up from yesterday" : "Down from yesterday"}
//         </div>
//       </div>
//     </div>
//   );
// }
import React from "react";

export default function StatCard({ title, value }) {
  const cardStyle = {
    flex: "1 1 200px",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    minWidth: "150px",
  };

  const titleStyle = { fontSize: "16px", marginBottom: "10px", color: "#555" };
  const valueStyle = { fontSize: "24px", fontWeight: "bold" };

  return (
    <div style={cardStyle}>
      <div style={titleStyle}>{title}</div>
      <div style={valueStyle}>{value}</div>
    </div>
  );
}
