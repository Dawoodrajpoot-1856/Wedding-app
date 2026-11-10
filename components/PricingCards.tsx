"use client";
import { motion } from "framer-motion";
import { plans } from "@/lib/data";
import { site, waLink } from "@/lib/config";

export default function PricingCards() {
  return (
    <div className="grid g3" style={{ alignItems: "stretch" }}>
      {plans.map((p, i) => (
        <motion.div
          key={p.name}
          className={`panel plan ${p.popular ? "pop" : ""}`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.12 }}
          whileHover={{ y: -8 }}
        >
          {p.popular && <span className="pop-badge">Most popular</span>}
          <div>
            <h3 className="display" style={{ fontSize: "1.8rem" }}>{p.name}</h3>
            <p className="muted">{p.note}</p>
          </div>
          <div className="plan-price">
            <small style={{ fontSize: "1rem", fontWeight: 400 }}>Rs </small>{p.price}
          </div>
          <ul>{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
          <a
            className={`btn ${p.popular ? "btn-primary" : "btn-ghost"}`}
            style={{ justifyContent: "center" }}
            target="_blank"
            rel="noopener noreferrer"
            href={waLink(`Assalam o Alaikum, mujhe ${site.name} ka ${p.name} plan lena hai.`)}
          >
            {p.name} plan lein
          </a>
        </motion.div>
      ))}
    </div>
  );
}