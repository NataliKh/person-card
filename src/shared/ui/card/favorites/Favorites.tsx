import { Member } from "@/entities/member/model/types";
import { useEffect, useState } from "react";

type FavoritesProps = Pick<Member, "id">;

export function Favorites({ id }: FavoritesProps) {
  const [active, setActive] = useState("");

  function toggleFavotites() {
    if (active) setActive("");
    else setActive("active");
  }

  return (
    <button
      className={`fav-btn ${active}`}
      data-id={id}
      aria-label="Добавить в избранное"
      title="Избранное"
      onClick={toggleFavotites}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.001 21s-7.2-4.35-9.6-8.7c-1.5-2.7.3-6.3 3.6-6.3 2.1 0 3.6 1.5 4.5 3 0.9-1.5 2.4-3 4.5-3 3.3 0 5.1 3.6 3.6 6.3-2.4 4.35-9.6 8.7-9.6 8.7z" />
      </svg>
    </button>
  );
}
