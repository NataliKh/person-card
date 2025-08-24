import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { routes } from "@/shared/config/routes";
import { NavLink } from "react-router-dom";
export function Breadcrumbs() {
    return (_jsxs("nav", { className: "breadcrumbs", children: [_jsx(NavLink, { to: routes.home(), children: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F" }), " / ", _jsx("span", { children: "\u041A\u043E\u043C\u0430\u043D\u0434\u0430" })] }));
}
