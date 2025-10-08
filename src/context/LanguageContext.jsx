// import React, { createContext, useContext, useState } from "react";
// import en from "../translations/en.json";
// import ar from "../translations/ar.json";

// const LanguageContext = createContext();

// export function LanguageProvider({ children }) {
//   const [language, setLanguage] = useState("en");
//   const translations = language === "en" ? en : ar;

//   const toggleLanguage = () =>
//     setLanguage((prev) => (prev === "en" ? "ar" : "en"));

//   return (
//     <LanguageContext.Provider
//       value={{ language, translations, toggleLanguage }}
//     >
//       {children}
//     </LanguageContext.Provider>
//   );
// }

// export function useLanguage() {
//   return useContext(LanguageContext);
// }
import React, { createContext, useContext, useState } from "react";
import en from "../translations/en.json";
import ar from "../translations/ar.json";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");
  const translations = language === "en" ? en : ar;

  // الآن تقدر تمرر اللغة مباشرة
  const toggleLanguage = (lang) => setLanguage(lang);

  return (
    <LanguageContext.Provider
      value={{ language, translations, toggleLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
}
