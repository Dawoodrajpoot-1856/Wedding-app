"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useMode } from "./ThemeProvider";
import { site, waLink } from "@/lib/config";

const links = [
  { href: "/", label: "Home" },
  { href: "/themes", label: "Themes" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About us" },
  { href: "/contact", label: "Contact us" },
];

export default function Header() {
  const path = usePathname();
  const { mode, toggle } = useMode();
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-in">
        <Link href="/" className="logo">Ahads<span>.</span>Invites</Link>

        <nav className="nav">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={path === l.href ? "active" : ""}>
              {path === l.href && (
                <motion.span layoutId="nav-pill" className="nav-pill" transition={{ type: "spring", stiffness: 380, damping: 30 }} />
              )}
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <button className="icon-btn" onClick={toggle} aria-label="Dark / light theme badlo">
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={mode}
                initial={{ y: -20, rotate: -90, opacity: 0 }}
                animate={{ y: 0, rotate: 0, opacity: 1 }}
                exit={{ y: 20, rotate: 90, opacity: 0 }}
                transition={{ duration: 0.25 }}
                style={{ fontSize: 18 }}
              >
                {mode === "dark" ? "\u2600" : "\u263E"}
              </motion.span>
            </AnimatePresence>
          </button>

          <a className="btn btn-primary" target="_blank" rel="noopener noreferrer"
             href={waLink(`Assalam o Alaikum, mujhe ${site.name} se wedding card banwana hai.`)}>
            Order now
          </a>

          <button className="icon-btn menu-btn" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? "\u2715" : "\u2630"}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div className="mobile-nav" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}