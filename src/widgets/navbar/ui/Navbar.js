import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { NavLink, Link } from "react-router-dom";
import { routes } from "@/shared/config/routes";
import { publicUrl } from "@/shared/lib/publicUrl";
export function Navbar() {
    return (_jsx("nav", { className: "nav", children: _jsxs("div", { className: "container nav-row", children: [_jsxs(Link, { to: routes.home(), className: "brand", "aria-label": "Reactoria", children: [_jsx("img", { className: "brand-logo", src: publicUrl("/logo.svg"), width: 40, height: 40, alt: "Reactoria", loading: "eager" }), _jsxs("span", { className: "brand-name", children: [_jsx("span", { className: "brand-accent", children: "React" }), "oria"] })] }), _jsxs("div", { className: "nav-links", children: [_jsx(NavLink, { to: routes.home(), className: ({ isActive }) => "nav-link" + (isActive ? " active" : ""), children: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F" }), _jsx(NavLink, { to: routes.favorites(), className: ({ isActive }) => "nav-link" + (isActive ? " active" : ""), children: "\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u044B\u0435" })] })] }) }));
}
