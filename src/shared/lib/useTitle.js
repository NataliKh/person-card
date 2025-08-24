import { useEffect } from "react";
export function useTitle(title) {
    useEffect(() => {
        document.title = `${title} · Reactoria`;
    }, [title]);
}
