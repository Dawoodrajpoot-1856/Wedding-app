import ThemesGrid from "@/components/ThemesGrid";
import Reveal from "@/components/Reveal";

export const metadata = { title: "Themes | Noor Invites" };

export default function ThemesPage() {
  return (
    <div className="container section" style={{ paddingTop: 70 }}>
      <Reveal className="center stack">
        <h1 className="display" style={{ fontSize: "clamp(2.4rem,6vw,4.2rem)" }}>Wedding card themes</h1>
        <p className="lead">Function chunein aur apna pasandida design dekhein. Kisi bhi card par click karke preview kholein.</p>
      </Reveal>
      <ThemesGrid />
    </div>
  );
}