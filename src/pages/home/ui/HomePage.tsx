import React from "react";
import { useTitle } from "@/shared/lib/useTitle";
import { Card } from "@/widgets";
export function HomePage() {
  useTitle("Главная");
  return (
    <section className="page container">
      <h1>Команда</h1>
      <p className="lead">
        Стартовый шаблон. Далее сюда добавим сетку карточек участников и фильтры.
      </p>
      <Card
        member={{
          id: "alex",
          firstName: "Алексей",
          lastName: "Иванов",
          age: 28,
          about: "Фронтенд. Люблю аккуратную типографику и быстрые интерфейсы.",
          avatarUrl: "",
          roleBadge: "Team Lead",
          skills: [{ name: "TypeScript" }, { name: "React" }],
          contribution: "Фронтенд‑инженер. В проекте: архитектура, UX, код‑ревью.",
        }}
      />
    </section>
  );
}
