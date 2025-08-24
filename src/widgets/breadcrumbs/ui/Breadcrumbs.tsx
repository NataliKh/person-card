import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { routes } from "@/shared/config/routes";
import { members, type Member } from "@/entities/member";

export function Breadcrumbs() {
  const { pathname } = useLocation();
  const { id } = useParams<{ id: string }>();

  const items: { label: string; to?: string }[] = [
    { label: "Главная", to: routes.home() },
  ];

  if (pathname.startsWith("/members")) {
    items.push({ label: "Участники", to: routes.home() });
    if (id) {
      const m = members.find((x: Member) => x.id === id);
      items.push({ label: m ? `${m.firstName} ${m.lastName}` : "Участник" });
    }
  } else if (pathname.startsWith("/favorites")) {
    items.push({ label: "Избранные" });
  }

  if (items.length <= 1) return null;

  return (
    <div className="container">
      <nav className="breadcrumbs" aria-label="breadcrumb" itemScope itemType="https://schema.org/BreadcrumbList">
        {items.map((it, i) => (
          <span key={i} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            {it.to ? (
              <Link to={it.to} itemProp="item"><span itemProp="name">{it.label}</span></Link>
            ) : (
              <span aria-current="page" itemProp="name">{it.label}</span>
            )}
            <meta itemProp="position" content={String(i + 1)} />
            {i < items.length - 1 && <span className="crumb-sep">/</span>}
          </span>
        ))}
      </nav>
    </div>
  );
}
