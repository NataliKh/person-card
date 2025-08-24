import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useLocation, useParams } from "react-router-dom";
import { routes } from "@/shared/config/routes";
import { members } from "@/entities/member";
export function Breadcrumbs() {
    const { pathname } = useLocation();
    const { id } = useParams();
    const items = [
        { label: "Главная", to: routes.home() },
    ];
    if (pathname.startsWith("/members")) {
        items.push({ label: "Участники", to: routes.home() });
        if (id) {
            const m = members.find((x) => x.id === id);
            items.push({ label: m ? `${m.firstName} ${m.lastName}` : "Участник" });
        }
    }
    else if (pathname.startsWith("/favorites")) {
        items.push({ label: "Избранные" });
    }
    if (items.length <= 1)
        return null;
    return (_jsx("div", { className: "container", children: _jsx("nav", { className: "breadcrumbs", "aria-label": "breadcrumb", itemScope: true, itemType: "https://schema.org/BreadcrumbList", children: items.map((it, i) => (_jsxs("span", { itemProp: "itemListElement", itemScope: true, itemType: "https://schema.org/ListItem", children: [it.to ? (_jsx(Link, { to: it.to, itemProp: "item", children: _jsx("span", { itemProp: "name", children: it.label }) })) : (_jsx("span", { "aria-current": "page", itemProp: "name", children: it.label })), _jsx("meta", { itemProp: "position", content: String(i + 1) }), i < items.length - 1 && _jsx("span", { className: "crumb-sep", children: "/" })] }, i))) }) }));
}
