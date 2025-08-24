import type { Member } from "./types";

export const members: Member[] = [
  {
    id: "natali",
    firstName: "Наталья",
    lastName: "Худякова",
    about: "Фронтенд-инженер.",
    roleBadge: "Team Lead",
    avatarUrl: "/members/natali.jpg",
    contribution: [
      "Архитектура проекта (FSD)",
      "UX-решения и навигация",
      "Код-ревью и гайдлайны"
    ],
    skills: [
      { id: "html", name: "HTML", level: 90, type: "bar" },
      { id: "css", name: "CSS", level: 40, type: "bar" },
      { id: "react", name: "React", level: 80, type: "circle" },
      { id: "javascript", name: "JavaScript", level: 95, type: "circle" },
      { id: "typescript", name: "TS", level: 25, type: "circle" },
    ],
    portfolio: ["/projects/natali-1.webp", "/projects/natali-2.webp"]
  },
  {
    id: "serafim",
    firstName: "Серафим",
    lastName: "Сухов",
    about: "Фронтенд-инженер.",
    roleBadge: "Participant",
    avatarUrl: "/members/serafim.jpg",
    contribution: [
      "UX-решения"
    ],
    skills: [
      { id: "html", name: "HTML", level: 70, type: "bar" },
      { id: "css", name: "CSS", level: 80, type: "bar" },
      { id: "react", name: "React", level: 50, type: "circle" },
      { id: "javascript", name: "JavaScript", level: 60, type: "circle" },
      { id: "typescript", name: "TS", level: 10, type: "circle" },
    ],
    portfolio: ["/projects/serafim-1.webp", "/projects/serafim-2.webp"]
  },
];
