type CardImageProps = {
  src?: string;
  alt: string;
};
export function CardImage({ src, alt }: CardImageProps) {
  return (
    <div className="card-cover">
      {src ? <img src={src} alt={`${alt} cover`} /> : <img src="public/member-alt-image.png" />}
    </div>
  );
}
