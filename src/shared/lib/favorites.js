const KEY = "favorites";
function safeDispatch(type) {
    try {
        window.dispatchEvent(new CustomEvent(type));
    }
    catch {
    }
}
function read() {
    try {
        const raw = localStorage.getItem(KEY);
        if (!raw)
            return [];
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed.filter((x) => typeof x === "string") : [];
    }
    catch {
        return [];
    }
}
function write(ids) {
    try {
        localStorage.setItem(KEY, JSON.stringify(Array.from(new Set(ids))));
        safeDispatch("favorites:changed");
    }
    catch {
    }
}
export function getFavorites() {
    return read();
}
export function isFavorite(id) {
    return read().includes(id);
}
export function toggleFavorite(id) {
    const ids = new Set(read());
    if (ids.has(id)) {
        ids.delete(id);
    }
    else {
        ids.add(id);
    }
    write(Array.from(ids));
    return ids.has(id);
}
export function removeFavorite(id) {
    const ids = new Set(read());
    ids.delete(id);
    write(Array.from(ids));
}
export function clearFavorites() {
    write([]);
}
