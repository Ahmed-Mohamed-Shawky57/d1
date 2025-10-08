// // src/components/Navbar.jsx
// import React from "react";

// export default function Navbar({ language, setLanguage }) {
//   return (
//     <nav className="navbar">
//       <h2 className="logo">VeTera Max</h2>

//       <div className="lang-switch">
//         {/* زرار اللغة العربية (مصر) */}
//         <button
//           className={`lang-btn ${language === "ar" ? "active" : ""}`}
//           onClick={() => setLanguage("ar")}
//         >
//           <img src="/download.png" alt="Arabic" width="30" height="30" />
//         </button>

//         {/* زرار اللغة الإنجليزية (بريطانيا) */}
//         <button
//           className={`lang-btn ${language === "en" ? "active" : ""}`}
//           onClick={() => setLanguage("en")}
//         >
//           <img src="/download (1).png" alt="English" width="30" height="30" />
//         </button>
//       </div>
//     </nav>
//   );
// }
