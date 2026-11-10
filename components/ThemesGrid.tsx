"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ThemeCard from "./ThemeCard";
import { categories, themes } from "@/lib/data";

export default function ThemesGrid() {
  const [cat, setCat] = useState<string>("All");
  const list = cat === "All" ? themes : themes.filter((t) => t.category === cat);

  return (
    <>
      <div className="chips">
        {categories.map((c) => (
          <button key={c} className={`chip ${cat === c ? "on" : ""}`} onClick={() => setCat(c)}>
            {cat === c && (
              <motion.span layoutId="chip-bg" className="chip-bg" transition={{ type: "spring", stiffness: 400, damping: 30 }} />
            )}
            <span>{c}</span>
          </button>
        ))}
      </div>

      <motion.div layout className="grid g4">
        <AnimatePresence mode="popLayout">
          {list.map((t) => (
            <motion.div
              key={t.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35 }}
            >
              <ThemeCard theme={t} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}