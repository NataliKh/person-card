import React from "react";
import { useParams } from "react-router-dom";
import { useTitle } from "@/shared/lib/useTitle";

export function MemberPage() {  
  const { id } = useParams<{id: string}>();
  useTitle(id ? `Участник ${id}` : "Участник"); // позже подставите имя из данных
  return (
    <section className="page container">
      <h1>Профиль участника</h1>
      <p className="lead">ID: {id}</p>
      <p>Здесь будет карточка участника, прогресс-бар, бейджи и галерея проектов.</p>
    </section>
  );
}
