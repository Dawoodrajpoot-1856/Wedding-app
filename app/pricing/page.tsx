import PricingCards from "@/components/PricingCards";
import Faq from "@/components/Faq";
import Reveal from "@/components/Reveal";

export const metadata = { title: "Pricing | Noor Invites" };

export default function PricingPage() {
  return (
    <>
      <div className="container page-head center stack">
        <Reveal className="stack">
          <h1 className="display" style={{ fontSize: "clamp(2.4rem,6vw,4.2rem)" }}>Pricing</h1>
          <p className="lead">Apni zaroorat ke mutabiq plan chunein. Qeematein Pakistani rupees me hain.</p>
        </Reveal>
      </div>

      <section className="section" style={{ paddingTop: 50 }}>
        <div className="container"><PricingCards /></div>
      </section>

      <section className="section alt">
        <div className="container">
          <Reveal className="center stack"><h2 className="display">Aam sawalat</h2></Reveal>
          <div style={{ marginTop: 40 }}><Faq /></div>
        </div>
      </section>
    </>
  );
}