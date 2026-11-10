const petals = Array.from({ length: 14 }, (_, i) => ({
  left: `${(i * 73) % 100}%`,
  dur: 11 + (i % 5) * 3,
  delay: -((i * 2.3) % 14),
  scale: 0.7 + (i % 4) * 0.3,
}));

export default function Petals() {
  return (
    <div className="petals" aria-hidden>
      {petals.map((p, i) => (
        <span key={i} className="petal"
          style={{ left: p.left, animationDuration: `${p.dur}s`, animationDelay: `${p.delay}s`, transform: `scale(${p.scale})` }} />
      ))}
    </div>
  );
}