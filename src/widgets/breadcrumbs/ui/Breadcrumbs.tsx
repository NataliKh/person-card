import { routes } from "@/shared/config/routes";
import { NavLink } from "react-router-dom";

export function Breadcrumbs() {
  return (
    <nav className="breadcrumbs">
      <NavLink to={routes.home()}>Главная</NavLink> / <span>Команда</span>
    </nav>
  );
}
