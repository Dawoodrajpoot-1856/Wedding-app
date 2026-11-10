import CardArt from "./CardArt";
import Reveal from "./Reveal";
import { themes } from "@/lib/data";

function Row({ reverse = false }: { reverse?: boolean }) {
  const list = reverse ? [...themes].reverse() : themes;
  const loop = [...list, ...list];

  return (
    <div className="marq-wrap">
      <div className={`marq-track ${reverse ? "reverse" : ""}`}>
        {loop.map((t, i) => (
          <a
            key={`${t.id}-${i}`}
            href={t.link}
            target="_blank"
            rel="noopener noreferrer"
            className="marq-item"
            aria-label={t.title}
          >
            <div className="marq-art">
              <CardArt theme={t} />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default function CardsMarquee() {
  return (
    <section className="section alt" style={{ overflow: "hidden" }}>
      <div className="container">
        <Reveal className="center stack">
          <h2 className="display">Hamari kuch pasandida designs</h2>
          <p className="lead">
            Chalte hue cards ko rokne ke liye mouse upar le jayein.
          </p>
        </Reveal>
      </div>
      <div style={{ marginTop: 48 }}>
        <Row />
        <Row reverse />
      </div>
    </section>
  );
}
