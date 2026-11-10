import Link from "next/link";
import Reveal from "./Reveal";

const steps = [
  { t: "Theme chunein", d: "Apni pasand ka card theme select karein." },
  { t: "Details bhejein", d: "Naam, tareekh aur venue WhatsApp par batayein." },
  { t: "Preview dekhein", d: "Hum card banate hain, aap changes batate hain." },
  { t: "Link share karein", d: "Tayyar card ka link sab mehmanon ko bhejein." },
];

export default function HowItWorks() {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="center stack">
          <h2 className="display">Card kaise banta hai</h2>
          <p className="lead">Chaar aasaan qadam, aur aap ka card tayyar.</p>
        </Reveal>

        <div className="grid g4" style={{ marginTop: 48 }}>
          {steps.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.1}>
              <div className="panel step">
                <b>{i + 1}</b>
                <h3 className="display" style={{ fontSize: "1.5rem", margin: "10px 0 6px" }}>{s.t}</h3>
                <p className="muted">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="center" style={{ marginTop: 44 }}>
          <Link href="/contact" className="btn btn-primary">Abhi order karein</Link>
        </div>
      </div>
    </section>
  );
}