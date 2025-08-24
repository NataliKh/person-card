import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CardImage, AboutMember, Badges, Contribution } from "@/shared/ui/card";
import { ToggleFavorite } from "@/features/favorites/toggle/ui/ToggleFavorite";
import { useNavigate } from "react-router-dom";
import { routes } from "@/shared/config/routes";
import "@/app/styles/index.css";
export function Card({ member }) {
    const navigate = useNavigate();
    const toMember = () => navigate(routes.member(member.id));
    const onKey = (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toMember();
        }
    };
    return (_jsxs("article", { className: "card", role: "link", tabIndex: 0, onClick: toMember, onKeyDown: onKey, children: [_jsx(ToggleFavorite, { id: member.id }), _jsx(CardImage, { src: member.avatarUrl, alt: member.firstName }), _jsxs("div", { className: "card-body", children: [_jsx(AboutMember, { firstName: member.firstName, lastName: member.lastName, about: member.about, age: member.age }), _jsx(Badges, { skills: member.skills }), _jsx("div", { className: "card-footer", children: _jsx(Contribution, { contribution: member.contribution }) })] })] }));
}
