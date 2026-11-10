"use client";
import { FormEvent, useState } from "react";
import { site, waLink } from "@/lib/config";
import { plans, themes } from "@/lib/data";

export default function ContactForm() {
  const [f, setF] = useState({ name: "", phone: "", date: "", theme: themes[0].title, plan: plans[1].name, msg: "" });
  const set = (k: string, v: string) => setF((p) => ({ ...p, [k]: v }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Assalam o Alaikum ${site.name},\nNaam: ${f.name}\nPhone: ${f.phone}\nShaadi ki tareekh: ${f.date}\nTheme: ${f.theme}\nPlan: ${f.plan}\n${f.msg}`;
    window.open(waLink(text), "_blank");
  };

  return (
    <form className="form panel" onSubmit={submit}>
      <div className="two">
        <div className="field">
          <label htmlFor="n">Aap ka naam</label>
          <input id="n" className="input" required value={f.name} onChange={(e) => set("name", e.target.value)} />
        </div>
        <div className="field">
          <label htmlFor="p">Phone / WhatsApp</label>
          <input id="p" className="input" required value={f.phone} onChange={(e) => set("phone", e.target.value)} />
        </div>
      </div>

      <div className="two">
        <div className="field">
          <label htmlFor="d">Shaadi ki tareekh</label>
          <input id="d" type="date" className="input" value={f.date} onChange={(e) => set("date", e.target.value)} />
        </div>
        <div className="field">
          <label htmlFor="t">Pasandida theme</label>
          <select id="t" className="input" value={f.theme} onChange={(e) => set("theme", e.target.value)}>
            {themes.map((t) => <option key={t.id}>{t.title}</option>)}
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="pl">Plan</label>
        <select id="pl" className="input" value={f.plan} onChange={(e) => set("plan", e.target.value)}>
          {plans.map((p) => <option key={p.name}>{p.name}</option>)}
        </select>
      </div>

      <div className="field">
        <label htmlFor="m">Aur kuch batana ho?</label>
        <textarea id="m" rows={4} className="input" value={f.msg} onChange={(e) => set("msg", e.target.value)} />
      </div>

      <button className="btn btn-primary" style={{ justifyContent: "center" }} type="submit">WhatsApp par bhejein</button>
    </form>
  );
}