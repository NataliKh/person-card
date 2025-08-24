export function publicUrl(path) {
    const p = String(path ?? "");
    if (!p)
        return import.meta.env.BASE_URL;
    if (/^https?:\/\//i.test(p))
        return p;
    const clean = p.replace(/^\/+/, "");
    return `${import.meta.env.BASE_URL}${clean}`;
}
