"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faqs } from "@/lib/data";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div style={{ maxWidth: 760, marginInline: "auto" }}>
      {faqs.map((f, i) => (
        <div className="faq-item" key={f.q}>
          <button className="faq-q" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
            <span>{f.q}</span>
            <motion.span animate={{ rotate: open === i ? 45 : 0 }} style={{ fontSize: 22, color: "var(--primary)" }}>+</motion.span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.p
                className="muted"
                style={{ overflow: "hidden", paddingBottom: 20 }}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
              >
                {f.a}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}