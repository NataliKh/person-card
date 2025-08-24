import type { Member } from "./types";

export const members: Member[] = [
  {
    id: "alex",
    firstName: "Алексей",
    lastName: "Иванов",
    about: "Фронтенд, архитектура и UX.",
    roleBadge: "Team Lead",
    areas: ["UX", "Архитектура"],
    skills: [
      { id: "html", name: "HTML", level: 90, type: "bar" },
      { id: "react", name: "React", level: 80, type: "circle" },
    ],
  },
  {
    id: "olga",
    firstName: "Ольга",
    lastName: "Смирнова",
    about: "UI и дизайн-системы.",
    areas: ["Компоненты", "Стили"],
  },
  {
    id: "ivan",
    firstName: "Иван",
    lastName: "Кузнецов",
    about: "Интеграции и сборка.",
    areas: ["Инфраструктура"],
  },
];