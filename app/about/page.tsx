import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import { site } from "@/lib/config";

export const metadata = { title: "About us | Noor Invites" };

const values = [
  { t: "Dil se design", d: "Har card ek kahani hai. Hum aap ke rishtay ke rang us me bharte hain." },
  { t: "Waqt ki qadar", d: "Shaadi ki tayyariyan mushkil hoti hain, isliye card 24 ghante me mil jata hai." },
  { t: "Sab ke liye aasaan", d: "Aik link, aur poora khandan WhatsApp par card dekh leta hai." },
];

const stats = [
  { n: 5, s: "+", l: "Saal ka tajurba" },
  { n: 1200, s: "+", l: "Cards" },
  { n: 40, s: "+", l: "Shehron me clients" },
  { n: 98, s: "%", l: "Khush clients" },
];

export default function About() {
  return (
    <>
      <div className="container page-head">
        <Reveal className="stack">
          <h1 className="display" style={{ fontSize: "clamp(2.4rem,6vw,4.2rem)", maxWidth: "16ch" }}>
            Hum shaadi ki pehli jhalak banate hain
          </h1>
          <p className="lead">
            {site.name} ek chhoti si creative team hai jo digital wedding cards design karti hai. Hum ne shuru kiya kyun ke kagaz ke card mehnge, der se tayyar aur badalne me mushkil the.
          </p>
        </Reveal>
      </div>

      <section className="section">
        <div className="container grid g3">
          {values.map((v, i) => (
            <Reveal key={v.t} delay={i * 0.1}>
              <div className="panel stack">
                <h3 className="display" style={{ fontSize: "1.7rem" }}>{v.t}</h3>
                <p className="muted">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section alt">
        <div className="container grid g4" style={{ textAlign: "center" }}>
          {stats.map((x) => (
            <Reveal key={x.l}>
              <div className="display" style={{ fontSize: "3.4rem", color: "var(--primary)" }}>
                <Counter to={x.n} suffix={x.s} />
              </div>
              <p className="muted">{x.l}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}