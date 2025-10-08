// import React, { useState } from "react";
// import {
//   FaTachometerAlt,
//   FaBoxOpen,
//   FaUsers,
//   FaClipboardList,
//   FaTags,
//   FaFileInvoice,
//   FaUserShield,
//   FaBell,
//   FaWallet,
//   FaUserFriends,
//   FaTruck,
//   FaRegFileAlt,
//   FaAd,
//   FaCodeBranch,
//   FaCog,
//   FaQuestionCircle,
//   FaMoon,
//   FaBars,
// } from "react-icons/fa";

// export default function DashboardLayout() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [productMenuOpen, setProductMenuOpen] = useState(false);

//   const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
//   const toggleProductMenu = () => setProductMenuOpen(!productMenuOpen);

//   const sidebarWidth = isSidebarOpen ? 250 : 60;

//   const styles = {
//     layout: {
//       display: "flex",
//       height: "100vh",
//       overflow: "hidden",
//     },
//     sidebar: {
//       width: sidebarWidth,
//       background: "#fff",
//       boxShadow: "2px 0 10px rgba(0,0,0,0.1)",
//       display: "flex",
//       flexDirection: "column",
//       transition: "width 0.3s ease",
//       overflowY: "auto",
//     },
//     header: {
//       padding: "20px",
//       borderBottom: "1px solid #eee",
//       textAlign: isSidebarOpen ? "left" : "center",
//     },
//     headerTitle: {
//       fontSize: "16px",
//       fontWeight: "bold",
//       color: "#2e7d32",
//       display: isSidebarOpen ? "block" : "none",
//     },
//     headerSub: {
//       fontSize: "13px",
//       color: "#666",
//       display: isSidebarOpen ? "block" : "none",
//     },
//     toggleBtn: {
//       fontSize: "20px",
//       cursor: "pointer",
//       color: "#2e7d32",
//       marginBottom: "10px",
//       textAlign: "center",
//     },
//     link: {
//       display: "flex",
//       alignItems: "center",
//       gap: isSidebarOpen ? "10px" : "0px",
//       fontSize: "14px",
//       color: "#444",
//       padding: "10px 15px",
//       cursor: "pointer",
//       whiteSpace: "nowrap",
//       overflow: "hidden",
//       transition: "all 0.3s",
//     },
//     linkText: {
//       display: isSidebarOpen ? "inline" : "none",
//     },
//     submenu: {
//       marginLeft: isSidebarOpen ? "30px" : "10px",
//       display: productMenuOpen ? "flex" : "none",
//       flexDirection: "column",
//     },
//     sublink: {
//       fontSize: "13px",
//       color: "#555",
//       padding: "5px 0",
//       cursor: "pointer",
//     },
//     section: {
//       padding: "10px 15px",
//       marginTop: "10px",
//       borderTop: "1px solid #eee",
//     },
//     sectionTitle: {
//       fontSize: "12px",
//       color: "#888",
//       marginBottom: "8px",
//       display: isSidebarOpen ? "block" : "none",
//     },
//     switch: {
//       marginLeft: "auto",
//       position: "relative",
//       display: "inline-block",
//       width: "34px",
//       height: "18px",
//     },
//     slider: {
//       position: "absolute",
//       cursor: "pointer",
//       top: 0,
//       left: 0,
//       right: 0,
//       bottom: 0,
//       backgroundColor: "#ccc",
//       transition: ".4s",
//       borderRadius: "34px",
//     },
//     sliderBefore: {
//       position: "absolute",
//       content: '""',
//       height: "14px",
//       width: "14px",
//       left: "2px",
//       bottom: "2px",
//       backgroundColor: "white",
//       transition: ".4s",
//       borderRadius: "50%",
//     },
//     footer: {
//       marginTop: "auto",
//       padding: "15px",
//       borderTop: "1px solid #eee",
//       display: "flex",
//       alignItems: "center",
//       gap: "10px",
//       justifyContent: isSidebarOpen ? "flex-start" : "center",
//     },
//     avatar: {
//       width: "40px",
//       height: "40px",
//       borderRadius: "50%",
//     },
//     userName: {
//       fontSize: "14px",
//       fontWeight: "600",
//     },
//     userRole: {
//       fontSize: "12px",
//       color: "#777",
//     },
//   };

//   return (
//     <div style={styles.layout}>
//       {/* Sidebar */}
//       <div style={styles.sidebar}>
//         <div style={styles.header}>
//           <div style={styles.toggleBtn} onClick={toggleSidebar}>
//             <FaBars />
//           </div>
//           <h2 style={styles.headerTitle}>DASHBOARD</h2>
//           <p style={styles.headerSub}>Vetra Max</p>
//         </div>

//         <div style={styles.link}>
//           <FaTachometerAlt />
//           <span style={styles.linkText}>Dashboard</span>
//         </div>

//         <div style={styles.link} onClick={toggleProductMenu}>
//           <FaBoxOpen />
//           <span style={styles.linkText}>Product (119)</span>
//         </div>
//         <div style={styles.submenu}>
//           <div style={styles.sublink}>Sneakers</div>
//           <div style={styles.sublink}>Jacket</div>
//           <div style={styles.sublink}>T-Shirt</div>
//           <div style={styles.sublink}>Bag</div>
//         </div>

//         <div style={styles.link}>
//           <FaUsers />
//           <span style={styles.linkText}>Customers (100K)</span>
//         </div>

//         <div style={styles.link}>
//           <FaClipboardList />
//           <span style={styles.linkText}>Orders (55)</span>
//         </div>

//         <div style={styles.link}>
//           <FaTags />
//           <span style={styles.linkText}>Category (20)</span>
//         </div>

//         <div style={styles.link}>
//           <FaFileInvoice />
//           <span style={styles.linkText}>Invoices (441)</span>
//         </div>

//         <div style={styles.link}>
//           <FaUserShield />
//           <span style={styles.linkText}>Admin</span>
//         </div>

//         <div style={styles.link}>
//           <FaBell />
//           <span style={styles.linkText}>Notification (12)</span>
//         </div>

//         <div style={styles.link}>
//           <FaWallet />
//           <span style={styles.linkText}>Wallet</span>
//         </div>

//         <div style={styles.link}>
//           <FaUserFriends />
//           <span style={styles.linkText}>Client Type</span>
//         </div>

//         <div style={styles.link}>
//           <FaTruck />
//           <span style={styles.linkText}>Line For Delivery</span>
//         </div>

//         <div style={styles.link}>
//           <FaRegFileAlt />
//           <span style={styles.linkText}>Privacy Policy</span>
//         </div>

//         <div style={styles.link}>
//           <FaAd />
//           <span style={styles.linkText}>Advertisements</span>
//         </div>

//         <div style={styles.link}>
//           <FaCodeBranch />
//           <span style={styles.linkText}>Branches</span>
//         </div>

//         {/* قسم Tools */}
//         <div style={styles.section}>
//           <p style={styles.sectionTitle}>TOOLS</p>

//           <div style={styles.link}>
//             <FaCog />
//             <span style={styles.linkText}>Account & Settings</span>
//           </div>

//           <div style={styles.link}>
//             <FaQuestionCircle />
//             <span style={styles.linkText}>Help</span>
//           </div>

//           <div style={styles.link}>
//             <FaMoon />
//             <span style={styles.linkText}>Dark Mode</span>
//             <label style={styles.switch}>
//               <input type="checkbox" style={{ display: "none" }} />
//               <span style={styles.slider}></span>
//             </label>
//           </div>
//         </div>

//         {/* الفوتر */}
//         <div style={styles.footer}>
//           <img
//             src="https://via.placeholder.com/40"
//             alt="User Avatar"
//             style={styles.avatar}
//           />
//           {isSidebarOpen && (
//             <div>
//               <p style={styles.userName}>Guy Hawkins</p>
//               <p style={styles.userRole}>Admin</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import {
  FaTachometerAlt,
  FaBoxOpen,
  FaUsers,
  FaClipboardList,
  FaTags,
  FaFileInvoice,
  FaUserShield,
  FaBell,
  FaWallet,
  FaUserFriends,
  FaTruck,
  FaRegFileAlt,
  FaAd,
  FaCodeBranch,
  FaCog,
  FaQuestionCircle,
  FaMoon,
  FaBars,
  FaGlobe,
} from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

export default function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [productMenuOpen, setProductMenuOpen] = useState(false);
  const { translations, toggleLanguage, language } = useLanguage();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleProductMenu = () => setProductMenuOpen(!productMenuOpen);

  const sidebarWidth = isSidebarOpen ? 250 : 60;

  const styles = {
    layout: {
      display: "flex",
      height: "100vh",
      overflow: "hidden",
    },
    sidebar: {
      width: sidebarWidth,
      background: "#fff",
      boxShadow: "2px 0 10px rgba(0,0,0,0.1)",
      display: "flex",
      flexDirection: "column",
      transition: "width 0.3s ease",
      overflowY: "auto",
    },
    header: {
      padding: "20px",
      borderBottom: "1px solid #eee",
      textAlign: isSidebarOpen ? "left" : "center",
    },
    headerTitle: {
      fontSize: "16px",
      fontWeight: "bold",
      color: "#2e7d32",
      display: isSidebarOpen ? "block" : "none",
    },
    headerSub: {
      fontSize: "13px",
      color: "#666",
      display: isSidebarOpen ? "block" : "none",
    },
    toggleBtn: {
      fontSize: "20px",
      cursor: "pointer",
      color: "#2e7d32",
      marginBottom: "10px",
      textAlign: "center",
    },
    link: {
      display: "flex",
      alignItems: "center",
      gap: isSidebarOpen ? "10px" : "0px",
      fontSize: "14px",
      color: "#444",
      padding: "10px 15px",
      cursor: "pointer",
      whiteSpace: "nowrap",
      overflow: "hidden",
      transition: "all 0.3s",
    },
    linkText: {
      display: isSidebarOpen ? "inline" : "none",
    },
    section: {
      padding: "10px 15px",
      marginTop: "10px",
      borderTop: "1px solid #eee",
    },
    sectionTitle: {
      fontSize: "12px",
      color: "#888",
      marginBottom: "8px",
      display: isSidebarOpen ? "block" : "none",
    },
    footer: {
      marginTop: "auto",
      padding: "15px",
      borderTop: "1px solid #eee",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      justifyContent: isSidebarOpen ? "flex-start" : "center",
    },
    avatar: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
    },
    languageBtn: {
      background: "none",
      border: "none",
      cursor: "pointer",
      fontSize: "16px",
      marginLeft: "auto",
      color: "#2e7d32",
    },
  };

  return (
    <div style={styles.layout}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <div style={styles.header}>
          <div style={styles.toggleBtn} onClick={toggleSidebar}>
            <FaBars />
          </div>
          <h2 style={styles.headerTitle}>{translations.sidebar.headerTitle}</h2>
          <p style={styles.headerSub}>{translations.sidebar.headerSub}</p>
        </div>

        {/* زر تغيير اللغة */}
        <button style={styles.languageBtn} onClick={toggleLanguage}>
          <FaGlobe />{" "}
          {isSidebarOpen && (language === "en" ? "العربية" : "English")}
        </button>

        <div style={styles.link}>
          <FaTachometerAlt />
          <span style={styles.linkText}>{translations.sidebar.dashboard}</span>
        </div>

        <div style={styles.link}>
          <FaBoxOpen />
          <span style={styles.linkText}>{translations.sidebar.product}</span>
        </div>

        <div style={styles.link}>
          <FaUsers />
          <span style={styles.linkText}>{translations.sidebar.customers}</span>
        </div>

        <div style={styles.link}>
          <FaClipboardList />
          <span style={styles.linkText}>{translations.sidebar.orders}</span>
        </div>

        <div style={styles.link}>
          <FaTags />
          <span style={styles.linkText}>{translations.sidebar.category}</span>
        </div>

        <div style={styles.link}>
          <FaFileInvoice />
          <span style={styles.linkText}>{translations.sidebar.invoices}</span>
        </div>

        <div style={styles.link}>
          <FaUserShield />
          <span style={styles.linkText}>{translations.sidebar.admin}</span>
        </div>

        <div style={styles.link}>
          <FaBell />
          <span style={styles.linkText}>
            {translations.sidebar.notification}
          </span>
        </div>

        <div style={styles.link}>
          <FaWallet />
          <span style={styles.linkText}>{translations.sidebar.wallet}</span>
        </div>

        <div style={styles.link}>
          <FaUserFriends />
          <span style={styles.linkText}>{translations.sidebar.clientType}</span>
        </div>

        <div style={styles.link}>
          <FaTruck />
          <span style={styles.linkText}>
            {translations.sidebar.lineForDelivery}
          </span>
        </div>

        <div style={styles.link}>
          <FaRegFileAlt />
          <span style={styles.linkText}>
            {translations.sidebar.privacyPolicy}
          </span>
        </div>

        <div style={styles.link}>
          <FaAd />
          <span style={styles.linkText}>
            {translations.sidebar.advertisements}
          </span>
        </div>

        <div style={styles.link}>
          <FaCodeBranch />
          <span style={styles.linkText}>{translations.sidebar.branches}</span>
        </div>

        {/* Tools Section */}
        <div style={styles.section}>
          <p style={styles.sectionTitle}>{translations.sidebar.tools}</p>

          <div style={styles.link}>
            <FaCog />
            <span style={styles.linkText}>{translations.sidebar.settings}</span>
          </div>

          <div style={styles.link}>
            <FaQuestionCircle />
            <span style={styles.linkText}>{translations.sidebar.help}</span>
          </div>

          <div style={styles.link}>
            <FaMoon />
            <span style={styles.linkText}>{translations.sidebar.darkMode}</span>
          </div>
        </div>

        {/* Footer */}
        <div style={styles.footer}>
          <img
            src="https://via.placeholder.com/40"
            alt="User Avatar"
            style={styles.avatar}
          />
          {isSidebarOpen && (
            <div>
              <p style={{ fontSize: "14px", fontWeight: 600 }}>Guy Hawkins</p>
              <p style={{ fontSize: "12px", color: "#777" }}>
                {translations.sidebar.admin}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
