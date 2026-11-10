import Link from "next/link";
import Carousel from "./Carousel";
import Petals from "./Petals";
import { site, waLink } from "@/lib/config";

export default function Hero() {
  return (
    <section className="hero">
      <div className="glow" />
      <Petals />
      <div className="container hero-grid" style={{ position: "relative" }}>
        <div className="stack">
          <span className="tag">Digital wedding cards</span>
          <h1 className="display">
            Aap ki shaadi ka card, <em>ek khoobsurat</em> pehla taassur
          </h1>
          <p className="lead">
            Animated, music wale aur WhatsApp par share hone wale cards. Nikah se Walima tak har function ka alag theme.
          </p>
          <div className="row">
            <Link href="/themes" className="btn btn-primary">Themes dekhein</Link>
            <a className="btn btn-ghost" target="_blank" rel="noopener noreferrer"
               href={waLink(`Assalam o Alaikum, mujhe ${site.name} se card banwana hai.`)}>
              WhatsApp par baat karein
            </a>
          </div>
        </div>
        <Carousel />
      </div>
    </section>
  );
}