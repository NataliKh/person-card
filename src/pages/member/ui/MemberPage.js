import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { useTitle } from "@/shared/lib/useTitle";
import { members } from "@/entities/member";
import { CardImage } from "@/shared/ui/card";
import { ToggleFavorite } from "@/features/favorites/toggle/ui/ToggleFavorite";
import { routes } from "@/shared/config/routes";
import { publicUrl } from "@/shared/lib/publicUrl";
export function MemberPage() {
    const { id } = useParams();
    const member = React.useMemo(() => members.find((m) => m.id === id), [id]);
    useTitle(member ? `${member.firstName} ${member.lastName}` : "Участник");
    if (!member) {
        return (_jsxs("section", { className: "page container", children: [_jsx("h1", { children: "\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D" }), _jsxs("p", { className: "lead", children: ["ID: ", id] }), _jsxs("p", { children: ["\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 ", _jsx(Link, { to: routes.home(), children: "\u0433\u043B\u0430\u0432\u043D\u0443\u044E" }), "."] })] }));
    }
    const smallLineParts = [];
    if (typeof member.age === "number")
        smallLineParts.push(`${member.age} лет`);
    if (member.roleBadge)
        smallLineParts.push(member.roleBadge);
    const smallLine = smallLineParts.join(" • ");
    const bars = (member.skills ?? []).filter((s) => (s.type ?? "bar") === "bar");
    const circles = (member.skills ?? []).filter((s) => (s.type ?? "bar") === "circle");
    const trackRef = React.useRef(null);
    const scrollBy = (dir) => {
        const el = trackRef.current;
        if (!el)
            return;
        const delta = (dir === "prev" ? -1 : 1) * Math.round(el.clientWidth * 0.9);
        el.scrollBy({ left: delta, behavior: "smooth" });
    };
    const gallery = member.portfolio && member.portfolio.length > 0
        ? member.portfolio
        : ["/projects/placeholder.svg"];
    const galleryFallback = (_i) => {
        return "/projects/placeholder.svg";
    };
    return (_jsx("section", { className: "page container", children: _jsx("section", { className: "section", children: _jsxs("div", { className: "grid", style: { gridTemplateColumns: "280px 1fr", gap: 24 }, children: [_jsx("div", { children: _jsxs("article", { className: "card", style: { minHeight: "auto", cursor: "default" }, children: [_jsx(ToggleFavorite, { id: member.id }), _jsx(CardImage, { src: member.avatarUrl, alt: `${member.firstName} ${member.lastName}` }), _jsxs("div", { className: "card-body", children: [_jsxs("strong", { children: [member.firstName, " ", member.lastName] }), smallLine ? _jsx("div", { className: "small", children: smallLine }) : null, (member.skills?.length ?? 0) > 0 ? (_jsx("div", { className: "badges", children: member.skills.slice(0, 2).map((s) => (_jsx("span", { className: "badge", children: s.name }, `skill-${s.id ?? s.name}`))) })) : null] })] }) }), _jsxs("div", { className: "grid", style: { gap: 18 }, children: [_jsxs("section", { children: [_jsx("h2", { className: "h1", children: "\u041E \u0441\u0435\u0431\u0435" }), _jsx("p", { className: "muted", children: member.about ?? "Информация о себе будет добавлена позже." })] }), (bars.length > 0 || circles.length > 0) && (_jsxs("section", { children: [_jsx("h3", { className: "h1", style: { fontSize: "1.2rem" }, children: "\u041D\u0430\u0432\u044B\u043A\u0438" }), _jsxs("div", { className: "grid", style: { gap: 14 }, children: [bars.length > 0 && (_jsx("div", { className: "grid", style: { gridTemplateColumns: "1fr 1fr", gap: 14 }, children: bars.map((s) => {
                                                    const pct = typeof s.level === "number" ? Math.max(0, Math.min(100, s.level)) : 0;
                                                    return (_jsxs("div", { className: "progress", children: [_jsxs("div", { className: "label", children: [_jsx("span", { children: s.name }), _jsxs("span", { children: [pct, "%"] })] }), _jsx("div", { className: "track", children: _jsx("div", { className: "fill", style: { width: `${pct}%` } }) })] }, `bar-${s.id ?? s.name}`));
                                                }) })), circles.length > 0 && (_jsx("div", { style: { display: "flex", gap: 12, flexWrap: "wrap", alignItems: "flex-start" }, children: circles.map((s) => {
                                                    const pct = typeof s.level === "number" ? Math.max(0, Math.min(100, s.level)) : 0;
                                                    const style = {
                                                        ["--p"]: pct,
                                                        ["--fg"]: s.color ?? undefined,
                                                    };
                                                    return (_jsxs("div", { className: "skill-circle", style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 6, minWidth: 100 }, children: [_jsxs("div", { className: "small", style: { opacity: 0.85, textAlign: "center" }, children: [s.name, " ", pct, "%"] }), _jsx("div", { className: "circle", style: style })] }, `circle-${s.id ?? s.name}`));
                                                }) }))] })] })), _jsxs("section", { children: [_jsx("h3", { className: "h1", style: { fontSize: "1.2rem" }, children: "\u041F\u0440\u043E\u0435\u043A\u0442\u044B (\u0433\u0430\u043B\u0435\u0440\u0435\u044F)" }), _jsxs("div", { className: "slider", children: [_jsx("button", { className: "arrow prev", "aria-label": "\u041D\u0430\u0437\u0430\u0434", onClick: () => scrollBy("prev"), children: "\u2039" }), _jsx("div", { className: "track", ref: trackRef, children: gallery.map((src, i) => (_jsx("figure", { className: "item", children: _jsx("a", { href: publicUrl(src), target: "_blank", rel: "noopener noreferrer", children: _jsx("img", { src: publicUrl(src), alt: `Проект ${i + 1}`, loading: "lazy", decoding: "async", onError: (e) => {
                                                                const img = e.currentTarget;
                                                                if (img.dataset.fallbackApplied)
                                                                    return;
                                                                const fb = publicUrl(galleryFallback(i));
                                                                img.src = fb;
                                                                const a = img.closest("a");
                                                                if (a)
                                                                    a.href = fb;
                                                                img.dataset.fallbackApplied = "1";
                                                            } }) }) }, `g-${i}`))) }), _jsx("button", { className: "arrow next", "aria-label": "\u0412\u043F\u0435\u0440\u0451\u0434", onClick: () => scrollBy("next"), children: "\u203A" })] })] }), _jsx("section", { children: _jsxs("details", { children: [_jsxs("summary", { children: [_jsx("span", { className: "tri" }), " \u0427\u0435\u043C \u0437\u0430\u043D\u0438\u043C\u0430\u043B\u0441\u044F \u0432 \u043F\u0440\u043E\u0435\u043A\u0442\u0435"] }), _jsx("div", { className: "content", children: Array.isArray(member.contribution) && member.contribution.length > 0
                                                ? member.contribution.join(", ")
                                                : "Описание вклада будет добавлено позже." })] }) })] })] }) }) }));
}
