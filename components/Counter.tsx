"use client";
import { animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const c = animate(0, to, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => { if (ref.current) ref.current.textContent = Math.round(v).toLocaleString() + suffix; },
    });
    return () => c.stop();
  }, [inView, to, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}