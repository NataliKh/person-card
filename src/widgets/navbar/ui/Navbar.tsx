import React from "react";
import { NavLink, Link } from "react-router-dom";
import { routes } from "@/shared/config/routes";

export function Navbar() {
  return (
    <nav className="nav">
      <div className="container nav-row">
        <Link to={routes.home()} className="brand" aria-label="Reactoria">
          <img
            className="brand-logo"
            src="/logo.svg"
            width={40}
            height={40}
            alt="Reactoria"
            loading="eager"
          />
          <span className="brand-name">
            <span className="brand-accent">React</span>oria
          </span>
        </Link>
        <div className="nav-links">
          <NavLink
            to={routes.home()}
            className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
          >
            Главная
          </NavLink>
          <NavLink
            to={routes.favorites()}
            className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
          >
            Избранные
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
