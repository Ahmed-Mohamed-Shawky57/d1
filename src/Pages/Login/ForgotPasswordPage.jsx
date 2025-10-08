// src/components/ForgotPasswordPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ForgotPasswordPage.module.css";

export default function ForgotPasswordPage({ t }) {
  const [email, setEmail] = useState("");
  const navigate = useNavigate(); // التنقل بين الصفحات

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا المفروض تبعت API للباك
    console.log("Email submitted:", email);

    // بعد ما يتبعت الـ API، روح على صفحة الكود
    navigate("/verify-code");
  };

  return (
    <div className={styles.container}>
      <img src="/Capture.PNG" alt="logo" className={styles.logo} />
      <h2>{t.forgotTitle}</h2>
      <p>{t.forgotText}</p>

      <form onSubmit={handleSubmit}>
        <label>{t.email}</label>
        <input
          type="email"
          placeholder="example@mail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit">{t.sendLink}</button>
      </form>

      <p className={styles.or}>{t.or}</p>
      <button className={styles.secondary} onClick={() => navigate("/")}>
        {t.returnLogin}
      </button>
    </div>
  );
}
