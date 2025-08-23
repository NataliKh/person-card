import React from "react";
import { useTitle } from "@/shared/lib/useTitle";

export function HomePage() {
  useTitle("Главная");
  return (
    <section className="page container">
      <h1>Команда</h1>
      <p className="lead">Стартовый шаблон. Далее сюда добавим сетку карточек участников и фильтры.</p>
    </section>
  );
}
