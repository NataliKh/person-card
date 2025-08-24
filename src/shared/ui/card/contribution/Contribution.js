import { jsx as _jsx } from "react/jsx-runtime";
import { deriveAreasFromContribution } from "@/entities/member/model/areas";
export function Contribution({ contribution = [] }) {
    const areas = deriveAreasFromContribution(contribution);
    const short = areas.slice(0, 2);
    const content = short.length ? short.join(" · ") : "—";
    return _jsx("span", { children: content });
}
