// import React, { useState, useEffect } from "react";
// import { Grid } from "lucide-react"; // ✅ استيراد الأيقونة
// import { FaTh } from "react-icons/fa";
// import { FiGrid } from "react-icons/fi";
// import Sidebar from "../../components/Sidebar";

// const API_URL = ""; // <-- when you have the API link, paste it here

// // small helper to format numbers like the UI
// const fmt = (n) => {
//   if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + "m";
//   if (n >= 1_000) return (n / 1_000).toFixed(0) + "," + String(n).slice(-3);
//   return String(n);
// };

// function useInjectedCSS() {
//   useEffect(() => {
//     const css = `
//     /* --------- base reset --------- */
//     :root{--bg:#f6f8fb;--card:#ffffff;--muted:#98a0b3;--accent:#2ca579;--accent-2:#f6a623;--glass: rgba(16,24,40,0.03)}
//     *{box-sizing:border-box}
//     body{font-family:Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; background:var(--bg); margin:0; color:#1f2937}
//     .dashboard-root{display:flex;min-height:100vh}

//   /* -------- collapsible sidebar -------- */
// .sidebar {
//   background: #fff;
//   width: 60px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 16px 8px;
//   transition: width 0.3s ease;
//   position: relative;
//   z-index: 100;
// }

// .sidebar.open {
//   width: 240px;
//   align-items: flex-start;
//   padding: 16px;
// }

// .toggle-btn {
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: #0b5f4f;
//   border-radius: 8px;
//   width: 40px;
//   height: 40px;
//   transition: background-color 0.3s;
// }

// .toggle-btn:hover {
//   background-color: #09745f;
// }

// .sidebar-links {
//   display: flex;
//   flex-direction: column;
//   margin-top: 20px;
//   width: 100%;
// }

// .sidebar-links a {
//   color: #fff;
//   text-decoration: none;
//   padding: 10px 12px;
//   border-radius: 6px;
//   display: block;
//   font-size: 15px;
//   transition: background 0.2s;
// }

// .sidebar-links a:hover {
//   background: rgba(255, 255, 255, 0.1);
// }
// .sidebar {
//   width: 250px;
//   background-color: #1e1e2f;
//   color: #fff;
//   height: 100vh;
//   transition: transform 0.3s ease;
//   position: fixed;
//   left: 0;
//   top: 0;
//   overflow-y: auto;
// }

// .sidebar.open {
//   transform: translateX(0);
// }

// .toggle-btn {
//   padding: 1rem;
//   cursor: pointer;
//   background-color: #292942;
//   text-align: center;
// }

// .sidebar-links {
//   padding: 1rem;
// }

// .section h4 {
//   margin-top: 1rem;
//   margin-bottom: 0.5rem;
//   font-size: 0.9rem;
//   color: #aaa;
// }

// .sidebar-links a {
//   display: flex;
//   justify-content: space-between;
//   padding: 0.5rem 0;
//   color: #fff;
//   text-decoration: none;
//   font-size: 0.95rem;
// }

// .sidebar-links a:hover {
//   background-color: #33334d;
//   border-radius: 4px;
// }

// .count {
//   background-color: #ff4d4f;
//   padding: 2px 6px;
//   border-radius: 12px;
//   font-size: 0.75rem;
// }

// .profile-section {
//   margin-top: 2rem;
//   padding: 1rem;
//   border-top: 1px solid #444;
// }

// .user-info {
//   text-align: center;
//   font-size: 0.85rem;
// }
// @media (max-width: 768px) {
//   .sidebar {
//     position: fixed;
//     top: 0;
//     left: 0;
//     height: 100vh;
//     transform: translateX(-100%);
//   }

//   .sidebar.open {
//     transform: translateX(0);
//   }
// }

//     /* -------- main area -------- */
//     .main{flex:1;padding:28px 32px}
//     .topbar{display:flex;align-items:center;justify-content:space-between;margin-bottom:18px}
//     .topbar .left{display:flex;align-items:center;gap:16px}
//     .page-title{font-size:20px;font-weight:700}
//     .search{display:flex;align-items:center;gap:8px;background:#fff;padding:8px 12px;border-radius:10px;box-shadow:0 1px 2px rgba(16,24,40,0.04)}

//     /* -------- stat cards -------- */
//     .stats{display:flex;gap:16px;margin:18px 0}
//     .card{background:var(--card);border-radius:12px;padding:18px;flex:1;box-shadow:0 6px 18px rgba(16,24,40,0.04);min-width:0}
//     .card .title{font-size:12px;color:var(--muted);margin-bottom:8px}
//     .card .value{font-size:20px;font-weight:700}
//     .card .meta{font-size:12px;color:var(--accent);margin-top:8px}

//     /* -------- panels -------- */
//     .panels{display:grid;grid-template-columns:2fr 1fr;gap:16px}
//     .panel{background:var(--card);border-radius:12px;padding:18px;box-shadow:0 6px 18px rgba(16,24,40,0.04)}
//     .panel h3{margin:0 0 12px 0}

//     /* line chart */
//     .chart-area{height:220px;background:linear-gradient(180deg, rgba(44,165,121,0.06), rgba(44,165,121,0.02));border-radius:8px;padding:12px}
//     .sparkline{width:100%;height:100%;display:flex;align-items:flex-end}
//     .sparkline svg{width:100%;height:100%;display:block}

//     /* revenue small chart */
//     .bars{display:flex;gap:8px;align-items:end;height:140px}
//     .bar{flex:1;border-radius:6px;background:linear-gradient(180deg, rgba(16,185,129,0.9), rgba(16,185,129,0.4));min-width:6px}

//     /* donut */
//     .donut-wrap{display:flex;align-items:center;justify-content:center;height:160px}

//     /* orders table */
//     .orders{margin-top:18px; position:relative; right:222px}
//     .orders table{width:100%;border-collapse:collapse}
//     .orders th, .orders td{padding:10px 8px;text-align:left;font-size:13px;color:#374151}
//     .orders thead th{color:#6b7280;font-size:12px}
//     .row-actions{display:flex;gap:8px}

//     /* responsive */
//     @media (max-width:1000px){
//       .panels{grid-template-columns:1fr}
//       .stats{flex-direction:column}
//       .sidebar{display:none}
//     }
//     `;

//     const style = document.createElement("style");
//     style.setAttribute("data-from", "DashboardHome");
//     style.appendChild(document.createTextNode(css));
//     document.head.appendChild(style);

//     return () => {
//       document.head.removeChild(style);
//     };
//   }, []);
// }

// // Simple mock charts built with SVG and inline shapes. Replace data via fetch.
// function LineChart({ data }) {
//   // data: array of numbers 0..100
//   const width = 900,
//     height = 200,
//     padding = 20;
//   if (!data || data.length === 0) return <div className="chart-area" />;
//   const max = Math.max(...data);
//   const stepX = (width - 2 * padding) / (data.length - 1);
//   const points = data
//     .map(
//       (d, i) =>
//         `${padding + i * stepX},${
//           height - padding - (d / max) * (height - 2 * padding)
//         }`
//     )
//     .join(" ");
//   const circles = data.map((d, i) => {
//     const x = padding + i * stepX;
//     const y = height - padding - (d / max) * (height - 2 * padding);
//     return <circle key={i} cx={x} cy={y} r={3} fill="#0b6f58" />;
//   });

//   // create area path for fill
//   const areaPath = `M ${padding},${height - padding} L ${points} L ${
//     padding + (data.length - 1) * stepX
//   },${height - padding} Z`;

//   return (
//     <div className="chart-area">
//       <svg viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none">
//         <defs>
//           <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
//             <stop offset="0%" stopOpacity="0.16" stopColor="#13a37a" />
//             <stop offset="100%" stopOpacity="0.02" stopColor="#13a37a" />
//           </linearGradient>
//         </defs>
//         <path d={areaPath} fill="url(#g1)" stroke="none" />
//         <polyline
//           points={points}
//           fill="none"
//           stroke="#0b6f58"
//           strokeWidth="2"
//           strokeLinejoin="round"
//           strokeLinecap="round"
//         />
//         {circles}
//       </svg>
//     </div>
//   );
// }

// function BarChart({ groups }) {
//   // groups: array of arrays, we'll render stacked-ish grouped bars across 7 days
//   const flat = groups.flat();
//   const max = Math.max(...flat);
//   return (
//     <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
//       <div style={{ height: 160 }}>
//         <div className="bars" style={{ height: 140 }}>
//           {groups[0].map((_, i) => {
//             // render three thin bars per day
//             const a = groups[0][i],
//               b = groups[1][i],
//               c = groups[2][i];
//             const total = a + b + c || 1;
//             const ha = Math.round((a / max) * 140);
//             const hb = Math.round((b / max) * 140);
//             const hc = Math.round((c / max) * 140);
//             return (
//               <div
//                 key={i}
//                 style={{
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: "center",
//                   gap: 4,
//                   height: "100%",
//                 }}
//               >
//                 <div
//                   style={{
//                     display: "flex",
//                     alignItems: "flex-end",
//                     gap: 4,
//                     height: 140,
//                   }}
//                 >
//                   <div
//                     style={{
//                       width: 18,
//                       height: ha,
//                       borderRadius: 6,
//                       background: "#22c55e",
//                     }}
//                   />
//                   <div
//                     style={{
//                       width: 18,
//                       height: hb,
//                       borderRadius: 6,
//                       background: "#f59e0b",
//                     }}
//                   />
//                   <div
//                     style={{
//                       width: 18,
//                       height: hc,
//                       borderRadius: 6,
//                       background: "#ef4444",
//                     }}
//                   />
//                 </div>
//                 <div style={{ fontSize: 12, color: "#6b7280", marginTop: 6 }}>
//                   {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// function Donut({ success = 70, pending = 20, failed = 10 }) {
//   const total = success + pending + failed || 1;
//   const s = Math.round((success / total) * 100);
//   const p = Math.round((pending / total) * 100);
//   const f = 100 - s - p;
//   const circumference = 2 * Math.PI * 36;
//   const aLen = (s / 100) * circumference;
//   const bLen = (p / 100) * circumference;
//   const cLen = (f / 100) * circumference;

//   return (
//     <div className="donut-wrap">
//       <svg width={140} height={140} viewBox="0 0 100 100">
//         <g transform="translate(50,50)">
//           <circle r="36" fill="none" stroke="#f3f4f6" strokeWidth="18" />
//           <circle
//             r="36"
//             fill="none"
//             stroke="#10b981"
//             strokeWidth="18"
//             strokeDasharray={`${aLen} ${circumference - aLen}`}
//             strokeDashoffset={-0}
//             strokeLinecap="round"
//             transform={`rotate(-90)`}
//           />
//           <circle
//             r="36"
//             fill="none"
//             stroke="#f59e0b"
//             strokeWidth="18"
//             strokeDasharray={`${bLen} ${circumference - bLen}`}
//             strokeDashoffset={-aLen}
//             strokeLinecap="round"
//             transform={`rotate(-90)`}
//           />
//           <circle
//             r="36"
//             fill="none"
//             stroke="#ef4444"
//             strokeWidth="18"
//             strokeDasharray={`${cLen} ${circumference - cLen}`}
//             strokeDashoffset={-(aLen + bLen)}
//             strokeLinecap="round"
//             transform={`rotate(-90)`}
//           />
//           <text
//             x="0"
//             y="4"
//             textAnchor="middle"
//             fontSize="9"
//             fontWeight={700}
//             fill="#111827"
//           >
//             {s}%
//           </text>
//         </g>
//       </svg>
//     </div>
//   );
// }
// export default function DashboardHome() {
//   useInjectedCSS();
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const [data, setData] = useState({
//     users: 40689,
//     orders: 10293,
//     sales: 89000,
//     newCustomers: 2040,
//     salesSeries: [
//       20, 30, 40, 28, 45, 38, 60, 20, 35, 42, 80, 30, 50, 42, 60, 20, 40, 50,
//       46, 52, 43, 48, 55, 38, 45, 49, 44, 52, 46,
//     ],
//     revenueGroups: [
//       [5, 8, 18, 6, 9, 11, 13], // wholesale
//       [3, 6, 25, 8, 10, 9, 12], // retail
//       [2, 4, 10, 3, 6, 4, 7], // farmer
//     ],
//     orderStatus: { success: 88, pending: 10, failed: 2 },
//     latestOrders: [
//       {
//         id: "#OD1234",
//         product: "Printer Paper",
//         date: "2025-09-20",
//         customer: "Mohamed A",
//         status: "Success",
//         amount: "$39",
//       },
//       {
//         id: "#OD1235",
//         product: "Notebook A5",
//         date: "2025-09-20",
//         customer: "Sara B",
//         status: "Pending",
//         amount: "$12",
//       },
//       {
//         id: "#OD1236",
//         product: "Envelope Set",
//         date: "2025-09-19",
//         customer: "Ali F",
//         status: "Failed",
//         amount: "$6",
//       },
//     ],
//   });

//   useEffect(() => {
//     if (!API_URL) return;

//     (async () => {
//       try {
//         const res = await fetch(API_URL);
//         if (!res.ok) throw new Error("Bad response");
//         const json = await res.json();

//         setData((prev) => ({
//           ...prev,
//           users: json.totalUsers ?? prev.users,
//           orders: json.totalOrders ?? prev.orders,
//           sales: json.totalSales ?? prev.sales,
//           newCustomers: json.newCustomers ?? prev.newCustomers,
//           salesSeries: json.salesSeries ?? prev.salesSeries,
//           revenueGroups: json.revenueGroups ?? prev.revenueGroups,
//           orderStatus: json.orderStatus ?? prev.orderStatus,
//           latestOrders: json.latestOrders ?? prev.latestOrders,
//         }));
//       } catch (err) {
//         console.error("Failed to load API data", err);
//       }
//     })();
//   }, []);

//   const fmt = (n) => n.toLocaleString();

//   return (
//     <div className="flex">
//       {/* ✅ Sidebar ثابت */}
//       <Sidebar />

//       {/* ✅ المحتوى الرئيسي */}
//       <div className="flex-1 ml-16 md:ml-64 p-6">
//         <main className="main">
//           {/* ✅ Topbar */}
//           <div className="topbar">
//             <div className="left">
//               <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
//                 <div
//                   style={{
//                     width: 36,
//                     height: 36,
//                     borderRadius: 8,
//                     background: "#fff",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                   }}
//                 >
//                   🌿
//                 </div>
//                 <div>
//                   <div className="page-title">Dashboard</div>
//                   <div style={{ fontSize: 12, color: "var(--muted)" }}>
//                     Overview of recent activity
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
//               <div className="search">
//                 <input
//                   placeholder="Search tickets"
//                   style={{ border: "none", outline: "none", width: 220 }}
//                 />
//               </div>
//               <div
//                 style={{
//                   width: 40,
//                   height: 34,
//                   borderRadius: 8,
//                   background: "#fff",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                 }}
//               >
//                 🔔
//               </div>
//               <div
//                 style={{
//                   width: 40,
//                   height: 34,
//                   borderRadius: 8,
//                   background: "#fff",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                 }}
//               >
//                 👤
//               </div>
//             </div>
//           </div>

//           {/* ✅ إحصائيات */}
//           <div className="stats">
//             <div className="card">
//               <div className="title">Total User</div>
//               <div className="value">{fmt(data.users)}</div>
//               <div className="meta">▲ 8.5% Up from yesterday</div>
//             </div>
//             <div className="card">
//               <div className="title">Total Order</div>
//               <div className="value">{fmt(data.orders)}</div>
//               <div className="meta">▲ 1.3% Up from past week</div>
//             </div>
//             <div className="card">
//               <div className="title">Total Sales</div>
//               <div className="value">{fmt(data.sales)}</div>
//               <div className="meta" style={{ color: "#ef4444" }}>
//                 ▼ 4.3% Down from yesterday
//               </div>
//             </div>
//             <div className="card">
//               <div className="title">New Customers</div>
//               <div className="value">{fmt(data.newCustomers)}</div>
//               <div className="meta">▲ 1.8% Up from yesterday</div>
//             </div>
//           </div>

//           {/* ✅ الرسوم البيانية */}
//           <div className="panels">
//             <div className="panel">
//               <h3>Sales Details</h3>
//               <LineChart data={data.salesSeries} />
//             </div>

//             <div className="panel">
//               <h3>Order Status</h3>
//               <Donut {...data.orderStatus} />
//               {/* باقي تفصيل الحالة */}
//             </div>

//             <div
//               className="panel"
//               style={{
//                 gridColumn: "1 / -1",
//                 display: "flex",
//                 flexDirection: "column",
//                 gap: 12,
//               }}
//             >
//               <h3>Total Revenue</h3>
//               <div style={{ display: "flex", gap: 16 }}>
//                 <div style={{ flex: 1 }}>
//                   <BarChart groups={data.revenueGroups} />
//                 </div>
//                 <div style={{ width: 220 }}>
//                   <h4 style={{ margin: 0 }}>Latest Orders</h4>
//                   <div className="orders">
//                     <table>
//                       <thead>
//                         <tr>
//                           <th>Products</th>
//                           <th>Order ID</th>
//                           <th>Date</th>
//                           <th>Customer name</th>
//                           <th>Status</th>
//                           <th>Amount</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {data.latestOrders.map((o, i) => (
//                           <tr key={i}>
//                             <td>{o.product}</td>
//                             <td>{o.id}</td>
//                             <td>{o.date}</td>
//                             <td>{o.customer}</td>
//                             <td>{o.status}</td>
//                             <td>{o.amount}</td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
// //   );
// import React from "react";
// import NavbarHome from "../../components/NavbarHome";
// import Sidebar from "../../components/Sidebar";
// import StatCard from "./StatCard";
// import RevenueChart from "./RevenueChart";
// import OrderStatusChart from "./OrderStatusChart";
// import SalesChart from "./SalesChart";
// import LatestOrders from "./LatestOrders";

// export default function DashboardHome({ language, toggleLanguage }) {
//   const dashboardStyle = {
//     display: "flex",
//     height: "100vh",
//     fontFamily: "Arial, sans-serif",
//     direction: language === "ar" ? "rtl" : "ltr",
//   };

//   const mainContentStyle = {
//     flex: 1,
//     padding: "20px",
//     backgroundColor: "#f4f4f4",
//     overflowY: "auto",
//   };

//   const statsContainer = {
//     display: "flex",
//     gap: "20px",
//     marginBottom: "20px",
//     flexWrap: "wrap",
//   };

//   const chartsContainer = {
//     display: "flex",
//     gap: "20px",
//     flexWrap: "wrap",
//   };

//   return (
//     <div style={dashboardStyle}>
//       <Sidebar language={language} />
//       <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
//         <NavbarHome language={language} toggleLanguage={toggleLanguage} />
//         <div style={mainContentStyle}>
//           <div style={statsContainer}>
//             <StatCard
//               title={language === "en" ? "Revenue" : "الإيرادات"}
//               value="$12,345"
//             />
//             <StatCard
//               title={language === "en" ? "Orders" : "الطلبات"}
//               value="245"
//             />
//             <StatCard
//               title={language === "en" ? "Customers" : "العملاء"}
//               value="120"
//             />
//             <StatCard
//               title={language === "en" ? "Products" : "المنتجات"}
//               value="58"
//             />
//           </div>

//           <div style={chartsContainer}>
//             <SalesChart language={language} />
//             <RevenueChart language={language} />
//             <OrderStatusChart language={language} />
//           </div>

//           <LatestOrders language={language} />
//         </div>
//       </div>
//     </div>
//   );
// }
import React from "react";
import NavbarHome from "../../components/NavbarHome";
import Sidebar from "../../components/Sidebar";
import StatCard from "./StatCard";
import RevenueChart from "./RevenueChart";
import OrderStatusChart from "./OrderStatusChart";
import SalesChart from "./SalesChart";
import LatestOrders from "./LatestOrders";
import { useLanguage } from "../../context/LanguageContext";

export default function DashboardHome() {
  const { language, toggleLanguage, translations } = useLanguage(); // ✅ هنا ناخد اللغة والترجمة من Context

  const dashboardStyle = {
    display: "flex",
    height: "100vh",
    fontFamily: "Arial, sans-serif",
    direction: language === "ar" ? "rtl" : "ltr",
  };

  const mainContentStyle = {
    flex: 1,
    padding: "20px",
    backgroundColor: "#f4f4f4",
    overflowY: "auto",
  };

  const statsContainer = {
    display: "flex",
    gap: "20px",
    marginBottom: "20px",
    flexWrap: "wrap",
  };

  const chartsContainer = {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  };

  return (
    <div style={dashboardStyle}>
      <Sidebar />
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <NavbarHome toggleLanguage={toggleLanguage} />
        <div style={mainContentStyle}>
          <div style={statsContainer}>
            <StatCard title={translations.revenue} value="$12,345" />
            <StatCard title={translations.orders} value="245" />
            <StatCard title={translations.customers} value="120" />
            <StatCard title={translations.products} value="58" />
          </div>

          <div style={chartsContainer}>
            <SalesChart />
            <RevenueChart />
            <OrderStatusChart />
          </div>

          <LatestOrders />
        </div>
      </div>
    </div>
  );
}
