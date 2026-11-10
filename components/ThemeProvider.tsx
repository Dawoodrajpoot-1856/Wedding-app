"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type Mode = "light" | "dark";
const Ctx = createContext<{ mode: Mode; toggle: () => void }>({
  mode: "light",
  toggle: () => {},
});
export const useMode = () => useContext(Ctx);

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<Mode>("light");

  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem("theme");
    } catch {}
    const initial: Mode =
      saved === "dark" || saved === "light"
        ? saved
        : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
    setMode(initial);
    document.documentElement.dataset.theme = initial;
  }, []);

  const toggle = () => {
    const next: Mode = mode === "light" ? "dark" : "light";
    setMode(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  return <Ctx.Provider value={{ mode, toggle }}>{children}</Ctx.Provider>;
}
