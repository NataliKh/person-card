import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTitle } from "@/shared/lib/useTitle";
import { members } from "@/entities/member";
import { Card } from "@/widgets/card";
export function HomePage() {
    useTitle("Главная");
    return (_jsxs("div", { className: "page container", children: [_jsx("section", { className: "section", children: _jsx("h1", { className: "h1", children: "\u041D\u0430\u0448\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430" }) }), _jsx("section", { className: "section", children: _jsx("div", { className: "grid cards", children: members.map((m) => (_jsx(Card, { member: m }, m.id))) }) })] }));
}
