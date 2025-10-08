// import React, { useState, useEffect } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   useLocation,
// } from "react-router-dom";

// import Navbar from "./components/NavbarHome";
// import LoginPage from "./Pages/Login/LoginPage";
// import ForgotPasswordPage from "./Pages/Login/ForgotPasswordPage";
// import VerifyCodePage from "./Pages/Login/VerifyCodePage";
// import DashboardHome from "./Pages/Home/DashboardHome";
// import translations from "./translations";

// function AppContent() {
//   const [language, setLanguage] = useState("en");
//   const tAuth = translations[language];
//   const dir = language === "ar" ? "rtl" : "ltr";

//   const location = useLocation();

//   useEffect(() => {
//     document.documentElement.dir = dir;
//     document.documentElement.lang = language;
//   }, [dir, language]);

//   const toggleLanguage = (lang) => {
//     setLanguage(lang);
//   };

//   const showLoginNavbar = !location.pathname.startsWith("/dashboard");

//   return (
//     <div dir={dir} className="min-h-screen">
//       {showLoginNavbar && (
//         <Navbar language={language} toggleLanguage={toggleLanguage} />
//       )}

//       <Routes>
//         <Route path="/" element={<LoginPage t={tAuth} />} />
//         <Route
//           path="/forgot-password"
//           element={<ForgotPasswordPage t={tAuth} />}
//         />
//         <Route path="/verify-code" element={<VerifyCodePage t={tAuth} />} />
//         <Route
//           path="/dashboard"
//           element={
//             <DashboardHome
//               language={language}
//               toggleLanguage={toggleLanguage}
//             />
//           }
//         />
//       </Routes>
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   );
// }
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import Navbar from "./components/NavbarHome";
import LoginPage from "./Pages/Login/LoginPage";
import ForgotPasswordPage from "./Pages/Login/ForgotPasswordPage";
import VerifyCodePage from "./Pages/Login/VerifyCodePage";
import DashboardHome from "./Pages/Home/DashboardHome";

function AppContent() {
  const { language, toggleLanguage, translations } = useLanguage();
  const dir = language === "ar" ? "rtl" : "ltr";
  const location = useLocation();

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
  }, [dir, language]);

  const showLoginNavbar = !location.pathname.startsWith("/dashboard");

  return (
    <div dir={dir} className="min-h-screen">
      {showLoginNavbar && (
        <Navbar language={language} toggleLanguage={toggleLanguage} />
      )}

      <Routes>
        <Route path="/" element={<LoginPage t={translations} />} />
        <Route
          path="/forgot-password"
          element={<ForgotPasswordPage t={translations} />}
        />
        <Route
          path="/verify-code"
          element={<VerifyCodePage t={translations} />}
        />
        <Route
          path="/dashboard"
          element={
            <DashboardHome
              language={language}
              toggleLanguage={toggleLanguage}
              t={translations}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <AppContent />
      </Router>
    </LanguageProvider>
  );
}
