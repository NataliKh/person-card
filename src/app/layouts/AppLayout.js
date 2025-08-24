import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet } from "react-router-dom";
import { Navbar } from "@/widgets/navbar";
import { Breadcrumbs } from "@/widgets";
export function AppLayout() {
    return (_jsxs("div", { className: "app-root", children: [_jsxs("header", { className: "app-header", children: [_jsx(Navbar, {}), _jsx(Breadcrumbs, {})] }), _jsx("main", { className: "app-main", children: _jsx(Outlet, {}) }), _jsx("footer", { className: "app-footer", children: _jsxs("div", { className: "container", children: ["\u00A9 ", new Date().getFullYear(), " Reactoria"] }) })] }));
}
