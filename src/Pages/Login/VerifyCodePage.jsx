// src/components/VerifyCodePage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // 👈 لازم نستدعيه
import styles from "./VerifyCodePage.module.css";

export default function VerifyCodePage({ t, email }) {
  const [code, setCode] = useState(["", "", "", ""]);
  const navigate = useNavigate(); // 👈 عشان نرجع للوجن

  const handleChange = (value, index) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا هتستدعي API عشان تبعت الكود
    alert("Code entered: " + code.join(""));
    // لو الكود صح ممكن توديه علي صفحة reset password
    // navigate("/reset-password");
  };

  const handleReturnLogin = () => {
    navigate("/"); // 👈 هنا بيرجّعك لصفحة اللوجن
  };

  return (
    <div className={styles.container}>
      <img src="/Capture.PNG" alt="logo" className={styles.logo} />
      <h2>{t.enterCode}</h2>
      <p>
        {t.codeSent} <b>{email}</b>
      </p>

      <form onSubmit={handleSubmit}>
        <div className={styles.codeBox}>
          {code.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
            />
          ))}
        </div>

        <p className={styles.resend}>{t.resend}</p>
        <button type="submit">{t.continue}</button>
      </form>

      <p className={styles.or}>{t.or}</p>
      <button className={styles.secondary} onClick={handleReturnLogin}>
        {t.returnLogin}
      </button>
    </div>
  );
}
