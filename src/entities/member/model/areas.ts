import type { Member } from "./types";

const RULES: Array<[RegExp, string]> = [
  [/архитектур\w*/i, "Архитектура"],
  [/\bux\b/i, "UX"],
  [/(?:\bui\b|интерфейс\w*)/i, "UI"],
  [/(?:код-?ревью|review)/i, "Кодревью"],
  [/(?:\bci\b|\bcd\b|github actions|депло[йй]|инфраструктур\w*)/i, "Инфраструктура"],
  [/(?:vite|webpack|сборк\w*)/i, "Сборка"],
  [/тест\w*|jest|vitest/i, "Тестирование"],
  [/анимаци\w*|gsap/i, "Анимации"],
  [/дизайн-систем\w*|дизайн\s*систем/i, "Дизайн-система"],
];

export function deriveAreasFromContribution(contribution: string[] = []): string[] {
  const out: string[] = [];
  const seen = new Set<string>();
  for (const raw of contribution) {
    const s = String(raw ?? "").toLowerCase();
    for (const [re, label] of RULES) {
      if (re.test(s) && !seen.has(label)) {
        seen.add(label);
        out.push(label);
      }
    }
  }
  return out;
}

export function getAreasForMember(m: Member): string[] {
  return deriveAreasFromContribution(m.contribution ?? []);
}
