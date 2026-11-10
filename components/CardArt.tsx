import { Theme } from "@/lib/data";

export default function CardArt({ theme }: { theme: Theme }) {
  if (theme.image) return <img className="card-art-img" src={theme.image} alt={theme.title} loading="lazy" />;
  return (
    <div className="card-art" style={{ background: `linear-gradient(160deg, ${theme.colors[0]}, ${theme.colors[1]})`, color: theme.ink }}>
      <div className="card-art-frame">
        <span className="card-art-small">{theme.category}</span>
        <span className="card-art-names">{theme.names}</span>
        <span className="card-art-date">{theme.date}</span>
      </div>
    </div>
  );
}