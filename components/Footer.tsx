import Link from "next/link";
import { site } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="logo">
              Wedding<span>.</span>Invites
            </div>
            <p className="muted" style={{ marginTop: 10, maxWidth: "34ch" }}>
              {site.tagline}
            </p>
          </div>
          <div>
            <h4>Pages</h4>
            <Link href="/themes">Themes</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/about">About us</Link>
            <Link href="/contact">Contact us</Link>
          </div>
          <div>
            <h4>Rabta</h4>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href={site.facebook} target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href={site.tiktok} target="_blank" rel="noopener noreferrer">
              TikTok
            </a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
        </div>
        <p className="copy">
          &copy; {site.year} {site.name}. Har card, ek nayi shuruaat.
        </p>{" "}
      </div>
    </footer>
  );
}
