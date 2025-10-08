import React from "react";
import NavbarHome from "./NavbarHome";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <NavbarHome />
      <div style={{ display: "flex", flex: 1 }}>
        <Sidebar />
        <main style={{ flex: 1, padding: "24px" }}>{children}</main>
      </div>
    </div>
  );
}
