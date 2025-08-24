import React from "react";
import { isFavorite, toggleFavorite } from "@/shared/lib/favorites";

type Props = {
  id: string;
  ariaLabel?: string;
  title?: string;
};

export function ToggleFavorite({ id, ariaLabel = "Добавить в избранное", title = "Избранное" }: Props) {
  const [active, setActive] = React.useState<boolean>(() => isFavorite(id));

  React.useEffect(() => {
    const onChange = () => setActive(isFavorite(id));
    window.addEventListener("favorites:changed", onChange as EventListener);
    return () => window.removeEventListener("favorites:changed", onChange as EventListener);
  }, [id]);

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const now = toggleFavorite(id);
    setActive(now);
  };

  return (
    <button
      type="button"
      className={"fav-btn" + (active ? " active" : "")}
      aria-pressed={active}
      aria-label={ariaLabel}
      title={title}
      onClick={onClick}
      data-id={id}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.001 21s-7.2-4.35-9.6-8.7c-1.5-2.7.3-6.3 3.6-6.3 2.1 0 3.6 1.5 4.5 3 0.9-1.5 2.4-3 4.5-3 3.3 0 5.1 3.6 3.6 6.3-2.4 4.35-9.6 8.7-9.6 8.7z" />
      </svg>
    </button>
  );
}