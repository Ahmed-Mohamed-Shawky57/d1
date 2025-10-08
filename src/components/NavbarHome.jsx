// import React, { useState } from "react";

// export default function NavbarHome({ language, toggleLanguage }) {
//   const [search, setSearch] = useState("");
//   const adminName = "Admin";

//   // مصفوفة اللغات مع العلم
//   const languages = [
//     { code: "en", label: "English", flag: "/flags/uk.png" },
//     { code: "ar", label: "عربي", flag: "/flags/egypt.png" },
//   ];

//   const navbarStyle = {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     backgroundColor: "#fff",
//     padding: "10px 20px",
//     boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
//     marginBottom: "20px",
//   };

//   const leftStyle = { display: "flex", alignItems: "center", gap: "15px" };
//   const rightStyle = { display: "flex", alignItems: "center", gap: "15px" };

//   const inputStyle = {
//     padding: "5px 10px",
//     borderRadius: "5px",
//     border: "1px solid #ccc",
//     width: "180px",
//   };

//   const handleChangeLanguage = (e) => {
//     const selectedLang = e.target.value;
//     if (toggleLanguage) {
//       toggleLanguage(selectedLang); // تمرير اللغة الجديدة
//     }
//   };

//   return (
//     <div style={navbarStyle}>
//       {/* الجهة اليسار: شعار + بحث */}
//       <div style={leftStyle}>
//         <img
//           src="/Capture.PNG"
//           alt="Logo"
//           style={{ width: "40px", height: "40px" }}
//         />
//         <input
//           type="text"
//           placeholder={language === "en" ? "Search..." : "ابحث..."}
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           style={inputStyle}
//         />
//       </div>

//       {/* الجهة اليمين: اللغة + الإشعارات + الاسم */}
//       <div style={rightStyle}>
//         <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
//           <select
//             value={language}
//             onChange={handleChangeLanguage}
//             style={inputStyle}
//           >
//             {languages.map((lang) => (
//               <option key={lang.code} value={lang.code}>
//                 {lang.label}
//               </option>
//             ))}
//           </select>

//           <img
//             src={languages.find((l) => l.code === language).flag}
//             alt="flag"
//             style={{ width: "24px", height: "24px" }}
//           />
//         </div>

//         <span>🔔</span>
//         <span>{adminName}</span>
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function NavbarHome() {
  const { language, toggleLanguage } = useLanguage();
  const [search, setSearch] = useState("");
  const adminName = "Admin";

  const languages = [
    { code: "en", label: "English", flag: "/flags/uk.png" },
    { code: "ar", label: "عربي", flag: "/flags/egypt.png" },
  ];

  const handleChangeLanguage = (e) => {
    toggleLanguage(e.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: "10px 20px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <img
          src="/Capture.PNG"
          alt="Logo"
          style={{ width: "40px", height: "40px" }}
        />
        <input
          type="text"
          placeholder={language === "en" ? "Search..." : "ابحث..."}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "5px 10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            width: "180px",
          }}
        />
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <select
          value={language}
          onChange={handleChangeLanguage}
          style={{
            padding: "5px 10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            width: "180px",
          }}
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.label}
            </option>
          ))}
        </select>
        <img
          src={languages.find((l) => l.code === language).flag}
          alt="flag"
          style={{ width: "24px", height: "24px" }}
        />
        <span>🔔</span>
        <span>{adminName}</span>
      </div>
    </div>
  );
}
