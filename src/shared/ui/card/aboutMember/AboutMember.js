import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
export function AboutMember({ firstName, lastName, age, about }) {
    return (_jsxs(_Fragment, { children: [_jsxs("div", { children: [_jsxs("strong", { children: [firstName, " ", lastName] }), typeof age === "number" ? _jsxs("span", { className: "small", children: [" \u00B7 ", age, " \u043B\u0435\u0442"] }) : null] }), about ? _jsx("div", { className: "small", children: about }) : null] }));
}
