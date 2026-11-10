"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CardArt from "./CardArt";
import { themes } from "@/lib/data";

const slides = themes.slice(0, 5);

export default function Carousel() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = slides.length;
  const half = Math.floor(n / 2);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((p) => (p + 1) % n), 3800);
    return () => clearInterval(t);
  }, [paused, n]);

  const go = (d: number) => setI((p) => (p + d + n) % n);

  return (
    <div
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="stage">
        {slides.map((s, idx) => {
          const off = ((idx - i + n + half) % n) - half;
          const abs = Math.abs(off);
          return (
            <motion.div
              key={s.id}
              className="slide"
              animate={{
                x: off * 150,
                scale: 1 - abs * 0.14,
                rotate: off * 7,
                opacity: 1 - abs * 0.3,
                zIndex: 10 - abs,
              }}
              transition={{ type: "spring", stiffness: 140, damping: 20 }}
              drag={off === 0 ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.5}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60) go(1);
                else if (info.offset.x > 60) go(-1);
              }}
              onClick={() => off !== 0 && setI(idx)}
            >
              <CardArt theme={s} />
            </motion.div>
          );
        })}
      </div>

      <div className="car-info">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[i].id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <span className="tag">{slides[i].category}</span>
            <h3 className="display" style={{ fontSize: "1.7rem" }}>
              {slides[i].title}
            </h3>
            <span className="price">{slides[i].price}</span>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="car-ctrl">
        <button
          className="icon-btn"
          aria-label="Pichla card"
          onClick={() => go(-1)}
        >
          &#8592;
        </button>
        {slides.map((s, d) => (
          <button
            key={s.id}
            aria-label={`Card ${d + 1}`}
            className={`dot ${d === i ? "on" : ""}`}
            onClick={() => setI(d)}
          />
        ))}
        <button
          className="icon-btn"
          aria-label="Agla card"
          onClick={() => go(1)}
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}
