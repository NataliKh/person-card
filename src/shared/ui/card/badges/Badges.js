import { jsx as _jsx } from "react/jsx-runtime";
import { Badge } from "./badge/Badge";
export function Badges({ skills }) {
    return (_jsx("div", { className: "badges", children: skills?.map((skill) => (_jsx(Badge, { content: skill.name }, skill.id))) }));
}
