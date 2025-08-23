import React from "react";
import { useTitle } from "@/shared/lib/useTitle";
export function FavoritesPage() {
  useTitle("Избранные");
  return (
    <section className="page container">
      <h1>Избранные</h1>
      <p className="lead">Список избранных участников из localStorage появится здесь.</p>
    </section>
  );
}
