import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/config";

export const metadata = { title: "Contact us | Noor Invites" };

export default function Contact() {
  const info = [
    { l: "WhatsApp / Phone", v: site.phone, h: `https://wa.me/${site.whatsapp}` },
    { l: "Email", v: site.email, h: `mailto:${site.email}` },
    { l: "Instagram", v: "Humein follow karein", h: site.instagram },
    { l: "Address", v: site.address, h: "#" },
  ];

  return (
    <div className="container section" style={{ paddingTop: 70 }}>
      <Reveal className="stack">
        <h1 className="display" style={{ fontSize: "clamp(2.4rem,6vw,4.2rem)" }}>Humse rabta karein</h1>
        <p className="lead">Form bharein, WhatsApp khulega aur aap ki details hum tak pahunch jayengi.</p>
      </Reveal>

      <div className="contact-grid" style={{ marginTop: 48 }}>
        <div className="stack">
          {info.map((x, i) => (
            <Reveal key={x.l} delay={i * 0.08}>
              <a href={x.h} target="_blank" rel="noopener noreferrer" className="panel" style={{ display: "block" }}>
                <span className="muted">{x.l}</span>
                <div className="display" style={{ fontSize: "1.5rem" }}>{x.v}</div>
              </a>
            </Reveal>
          ))}
        </div>
        <Reveal><ContactForm /></Reveal>
      </div>
    </div>
  );
}