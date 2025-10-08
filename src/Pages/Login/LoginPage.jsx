// import React from "react";
// import { useNavigate } from "react-router-dom";
// import styles from "./LoginPage.module.css";

// export default function LoginPage({ t }) {
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     // بعد التحقق من البيانات (مؤقتًا بدون API)
//     navigate("/dashboard"); // 🔹 هنا مسار الداشبورد
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.formBox}>
//         <h2>{t.login}</h2>
//         <label>{t.email}</label>
//         <br />
//         <input type="email" placeholder="example@mail.com" />

//         <label>{t.password}</label>
//         <br />
//         <input type="password" placeholder="••••••••" />

//         <div className={styles.options}>
//           <label>
//             <input type="checkbox" /> {t.remember}
//           </label>
//           <a href="/forgot-password">{t.forgot}</a>
//         </div>

//         <button onClick={handleLogin}>{t.submit}</button>
//         <p className={styles.register}>
//           {t.noAccount} <a href="#">{t.register}</a>
//         </p>
//       </div>

//       <div className={styles.logoSide}>
//         <img src="/Capture.PNG" alt="logo" />
//       </div>
//     </div>
//   );
// }
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.css";

export default function LoginPage({ t }) {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div className={styles.container}>
      <div className={styles.formBox}>
        <h2>{t.login}</h2>
        <label>{t.email}</label>
        <input type="email" placeholder="example@mail.com" />

        <label>{t.password}</label>
        <input type="password" placeholder="••••••••" />

        <div className={styles.options}>
          <label>
            <input type="checkbox" /> {t.remember}
          </label>
          <a href="/forgot-password">{t.forgot}</a>
        </div>

        <button onClick={handleLogin}>{t.submit}</button>
        <p className={styles.register}>
          {t.noAccount} <a href="#">{t.register}</a>
        </p>
      </div>

      <div className={styles.logoSide}>
        <img src="/Capture.PNG" alt="logo" />
      </div>
    </div>
  );
}
