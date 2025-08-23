import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "@/widgets/navbar";

export function AppLayout() {
  return (
    <div className="app-root">
      <header className="app-header">
        <Navbar />
      </header>
      <main className="app-main">
        <Outlet />
      </main>
      <footer className="app-footer">
        <div className="container">© {new Date().getFullYear()} Reactoria</div>
      </footer>
    </div>
  );
}
