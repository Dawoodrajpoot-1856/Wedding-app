"use client";
import { motion } from "framer-motion";
import CardArt from "./CardArt";
import { Theme } from "@/lib/data";

export default function ThemeCard({ theme }: { theme: Theme }) {
  return (
    <motion.a
      href={theme.link}
      target="_blank"
      rel="noopener noreferrer"
      className="theme-card"
      style={{ display: "block" }}
      whileHover={{ y: -10, rotate: -0.6 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
    >
      <div className="theme-art"><CardArt theme={theme} /></div>
      <div className="theme-meta">
        <div>
          <span className="tag">{theme.category}</span>
          <h3>{theme.title}</h3>
        </div>
        <span className="price">{theme.price}</span>
      </div>
    </motion.a>
  );
}   