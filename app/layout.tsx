import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
});
const body = Outfit({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Dawood Invites | Digital Wedding Cards",
  description:
    "Animated digital wedding cards: Nikah, Mehndi, Barat, Walima aur Engagement ke liye.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${display.variable} ${body.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
