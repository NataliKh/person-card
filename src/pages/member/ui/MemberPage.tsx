import React from "react";
import { Link, useParams } from "react-router-dom";
import { useTitle } from "@/shared/lib/useTitle";
import { members } from "@/entities/member";
import { CardImage } from "@/shared/ui/card";
import { ToggleFavorite } from "@/features/favorites/toggle/ui/ToggleFavorite";
import { routes } from "@/shared/config/routes";
import { publicUrl } from "@/shared/lib/publicUrl";

export function MemberPage() {
  const { id } = useParams<{ id: string }>();
  const member = React.useMemo(() => members.find((m) => m.id === id), [id]);

  useTitle(member ? `${member.firstName} ${member.lastName}` : "Участник");

  if (!member) {
    return (
      <section className="page container">
        <h1>Участник не найден</h1>
        <p className="lead">ID: {id}</p>
        <p>
          Перейти на <Link to={routes.home()}>главную</Link>.
        </p>
      </section>
    );
  }

  const smallLineParts: string[] = [];
  if (typeof member.age === "number") smallLineParts.push(`${member.age} лет`);
  if (member.roleBadge) smallLineParts.push(member.roleBadge);
  const smallLine = smallLineParts.join(" • ");

  const bars = (member.skills ?? []).filter((s) => (s.type ?? "bar") === "bar");
  const circles = (member.skills ?? []).filter((s) => (s.type ?? "bar") === "circle");

  const trackRef = React.useRef<HTMLDivElement | null>(null);
  const scrollBy = (dir: "prev" | "next") => {
    const el = trackRef.current;
    if (!el) return;
    const delta = (dir === "prev" ? -1 : 1) * Math.round(el.clientWidth * 0.9);
    el.scrollBy({ left: delta, behavior: "smooth" });
  };

  const gallery: string[] =
    member.portfolio && member.portfolio.length > 0
      ? member.portfolio
      : ["/projects/placeholder.svg"];

  const galleryFallback = (_i: number) => {
    return "/projects/placeholder.svg";
  };

  return (
    <section className="page container">
      <section className="section">
        <div className="grid" style={{ gridTemplateColumns: "280px 1fr", gap: 24 }}>          
          <div>
            <article className="card" style={{ minHeight: "auto", cursor: "default" }}>
              <ToggleFavorite id={member.id} />
              <CardImage src={member.avatarUrl} alt={`${member.firstName} ${member.lastName}`} />
              <div className="card-body">
                <strong>
                  {member.firstName} {member.lastName}
                </strong>
                {smallLine ? <div className="small">{smallLine}</div> : null}
                {(member.skills?.length ?? 0) > 0 ? (
                  <div className="badges">
                    {member.skills!.slice(0, 2).map((s) => (
                      <span className="badge" key={`skill-${s.id ?? s.name}`}>
                        {s.name}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </article>
          </div>
          
          <div className="grid" style={{ gap: 18 }}>
            <section>
              <h2 className="h1">О себе</h2>
              <p className="muted">{member.about ?? "Информация о себе будет добавлена позже."}</p>
            </section>

            {(bars.length > 0 || circles.length > 0) && (
              <section>
                <h3 className="h1" style={{ fontSize: "1.2rem" }}>
                  Навыки
                </h3>
                <div className="grid" style={{ gap: 14 }}>
                  {bars.length > 0 && (
                    <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                      {bars.map((s) => {
                        const pct = typeof s.level === "number" ? Math.max(0, Math.min(100, s.level)) : 0;
                        return (
                          <div className="progress" key={`bar-${s.id ?? s.name}`}>
                            <div className="label">
                              <span>{s.name}</span>
                              <span>{pct}%</span>
                            </div>
                            <div className="track">
                              <div className="fill" style={{ width: `${pct}%` }} />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                  {circles.length > 0 && (
                    <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "flex-start" }}>
                      {circles.map((s) => {
                        const pct = typeof s.level === "number" ? Math.max(0, Math.min(100, s.level)) : 0;
                        const style = {
                          ["--p" as any]: pct,
                          ["--fg" as any]: s.color ?? undefined,
                        } as React.CSSProperties;
                        return (
                          <div
                            key={`circle-${s.id ?? s.name}`}
                            className="skill-circle"
                            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, minWidth: 100 }}
                          >
                            <div className="small" style={{ opacity: 0.85, textAlign: "center" }}>
                              {s.name} {pct}%
                            </div>
                            <div className="circle" style={style} />
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </section>
            )}
           
            <section>
              <h3 className="h1" style={{ fontSize: "1.2rem" }}>
                Проекты (галерея)
              </h3>
              <div className="slider">
                <button className="arrow prev" aria-label="Назад" onClick={() => scrollBy("prev")}>
                  ‹
                </button>
                <div className="track" ref={trackRef}>
                  {gallery.map((src, i) => (
                    <figure className="item" key={`g-${i}`}>
                      <a href={publicUrl(src)} target="_blank" rel="noopener noreferrer">
                        <img
                          src={publicUrl(src)}
                          alt={`Проект ${i + 1}`}
                          loading="lazy"
                          decoding="async"
                          onError={(e) => {
                            const img = e.currentTarget as HTMLImageElement;
                            if (img.dataset.fallbackApplied) return;
                            const fb = publicUrl(galleryFallback(i));
                            img.src = fb;
                            const a = img.closest("a") as HTMLAnchorElement | null;
                            if (a) a.href = fb;
                            img.dataset.fallbackApplied = "1";
                          }}
                        />
                      </a>
                    </figure>
                  ))}
                </div>
                <button className="arrow next" aria-label="Вперёд" onClick={() => scrollBy("next")}>
                  ›
                </button>
              </div>
            </section>
            
            <section>
              <details>
                <summary>
                  <span className="tri"></span> Чем занимался в проекте
                </summary>
                <div className="content">
                  {Array.isArray(member.contribution) && member.contribution.length > 0
                    ? member.contribution.join(", ")
                    : "Описание вклада будет добавлено позже."}
                </div>
              </details>
            </section>
          </div>
        </div>
      </section>
    </section>
  );
}
