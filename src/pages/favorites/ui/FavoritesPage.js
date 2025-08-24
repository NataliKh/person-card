import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { useTitle } from "@/shared/lib/useTitle";
import { getFavorites } from "@/shared/lib/favorites";
import { members } from "@/entities/member";
import { Card } from "@/widgets/card";
export function FavoritesPage() {
    useTitle("Избранные");
    const [ids, setIds] = React.useState(() => getFavorites());
    React.useEffect(() => {
        const onChange = () => setIds(getFavorites());
        window.addEventListener("favorites:changed", onChange);
        return () => window.removeEventListener("favorites:changed", onChange);
    }, []);
    const favoriteMembers = React.useMemo(() => members.filter((m) => ids.includes(m.id)), [ids]);
    return (_jsxs("section", { className: "page container", children: [_jsx("h1", { children: "\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u044B\u0435" }), favoriteMembers.length === 0 ? (_jsx("p", { className: "lead", children: "\u041F\u043E\u043A\u0430 \u043D\u0435\u0442 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u044B\u0445 \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432. \u0414\u043E\u0431\u0430\u0432\u044C\u0442\u0435, \u043D\u0430\u0436\u0430\u0432 \u043D\u0430 \u0441\u0435\u0440\u0434\u0435\u0447\u043A\u043E \u043D\u0430 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0435." })) : (_jsx("div", { className: "grid cards", children: favoriteMembers.map((m) => (_jsx(Card, { member: m }, m.id))) }))] }));
}
