import React from "react";
import { useTitle } from "@/shared/lib/useTitle";
import { getFavorites } from "@/shared/lib/favorites";
import { members } from "@/entities/member";
import { Card } from "@/widgets/card";

export function FavoritesPage() {
  useTitle("Избранные");

  const [ids, setIds] = React.useState<string[]>(() => getFavorites());
  React.useEffect(() => {
    const onChange = () => setIds(getFavorites());
    window.addEventListener("favorites:changed", onChange as EventListener);
    return () => window.removeEventListener("favorites:changed", onChange as EventListener);
  }, []);

  const favoriteMembers = React.useMemo(
    () => members.filter((m) => ids.includes(m.id)),
    [ids]
  );

  return (
    <section className="page container">
      <h1>Избранные</h1>
      {favoriteMembers.length === 0 ? (
        <p className="lead">Пока нет избранных участников. Добавьте, нажав на сердечко на карточке.</p>
      ) : (
        <div className="grid cards">
          {favoriteMembers.map((m) => (
            <Card key={m.id} member={m} />
          ))}
        </div>
      )}
    </section>
  );
}
