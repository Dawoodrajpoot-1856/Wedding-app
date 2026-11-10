import Link from "next/link";
import Reveal from "./Reveal";
import ThemeCard from "./ThemeCard";
import { themes } from "@/lib/data";

export default function AllThemes() {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="center stack">
          <h2 className="display">Hamare wedding card themes</h2>
          <p className="lead">Har function ke liye alag design. Pasand aane wale card par click karein.</p>
        </Reveal>

        <div className="grid g4" style={{ marginTop: 48 }}>
          {themes.map((t, i) => (
            <Reveal key={t.id} delay={(i % 4) * 0.08}>
              <ThemeCard theme={t} />
            </Reveal>
          ))}
        </div>

        <div className="center" style={{ marginTop: 40 }}>
          <Link href="/themes" className="btn btn-ghost">Category ke hisaab se dekhein</Link>
        </div>
      </div>
    </section>
  );
}