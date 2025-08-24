import React from "react";
import { publicUrl } from "@/shared/lib/publicUrl";

type CardImageProps = {
  src?: string;
  alt: string;
};

export function CardImage({ src, alt }: CardImageProps) {
  const [loaded, setLoaded] = React.useState(false);
  const [error, setError] = React.useState(false);

  const rawSrc = error ? "/members/placeholder.svg" : (src || "/members/placeholder.svg");
  const effectiveSrc = publicUrl(rawSrc);

  return (
    <div className="card-cover" style={{ position: "relative" }}>
      {!loaded && (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            display: "grid",
            placeItems: "center",
            background: "linear-gradient(180deg,#0f131c,#0c0f16)",
          }}
        >
          <div
            style={{
              width: 22,
              height: 22,
              borderRadius: "50%",
              border: "2px solid rgba(255,255,255,.25)",
              borderTopColor: "var(--brand)",
              animation: "spin .9s linear infinite",
            }}
          />
        </div>
      )}
      <img
        src={effectiveSrc}
        alt={`${alt} cover`}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => {
          setError(true);
          setLoaded(true);
        }}
        style={{ opacity: loaded ? 1 : 0, transition: "opacity .2s ease" }}
      />
    </div>
  );
}
