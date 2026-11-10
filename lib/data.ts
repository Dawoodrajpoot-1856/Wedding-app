export type Category = "Nikah" | "Mehndi" | "Barat" | "Walima" | "Engagement";

export type Theme = {
  id: string;
  title: string;
  category: Category;
  price: string;
  names: string;
  date: string;
  colors: [string, string];
  ink: string;
  image: string; // apni image ka link / "/cards/x.jpg"
  link: string; // apna preview / order link
};

export const categories: ("All" | Category)[] = [
  "All",
  "Nikah",
  "Mehndi",
  "Barat",
  "Walima",
  "Engagement",
];

export const themes: Theme[] = [
  {
    id: "pastel-engage",
    title: "Pastel Engagement",
    category: "Engagement",
    price: "Rs 3500",
    names: "Noor & Talha",
    date: "30 . 11 . 2026",
    colors: ["#C7D2FE", "#FBCFE8"],
    ink: "#3B1F4A",
    image: "/images/Theme10.png",
    link: "https://Card-template1.vercel.app",
  },

  {
    id: "theme-11",
    title: "Blush Engagement",
    category: "Engagement",
    price: "Rs 3500",
    names: "Anaya & Zain",
    date: "20 . 12 . 2026",
    colors: ["#FBCFE8", "#9D174D"],
    ink: "#4A1D33",
    image: "/images/Theme5.png",
    link: "https://Card-template2.vercel.app",
  },
  {
    id: "theme-4",
    title: "Royal Barat",
    category: "Barat",
    price: "Rs 3500",
    names: "Areeba & Danish",
    date: "15 . 01 . 2027",
    colors: ["#1E3A8A", "#D4AF37"],
    ink: "#FFF7D6",
    image: "/images/Theme4.png",
    link: "https://Card-template3.vercel.app",
  },
  {
    id: "minimal-ivory",
    title: "Minimal Ivory",
    category: "Walima",
    price: "Rs 3500",
    names: "Laiba & Rayyan",
    date: "27 . 06 . 2027",
    colors: ["#F5F5F4", "#D6C7B0"],
    ink: "#3F2E1E",
    image: "/images/Theme7.png",
    link: "https://Card-template4.vercel.app",
  },
  {
    id: "royal-marigold",
    title: "Royal Marigold",
    category: "Mehndi",
    price: "Rs 3500",
    names: "Ayesha & Hamza",
    date: "14 . 02 . 2027",
    colors: ["#F4A62A", "#C2410C"],
    ink: "#FFF7E6",
    image: "/images/Theme6.png",
    link: "https://Card-template5.vercel.app",
  },
  {
    id: "rose-nikah",
    title: "Rose Nikah",
    category: "Nikah",
    price: "Rs 3000",
    names: "Mariam & Bilal",
    date: "21 . 03 . 2027",
    colors: ["#F9C6D4", "#B3205A"],
    ink: "#FFFFFF",
    image: "/images/Theme3.png",
    link: "https://Card-template6.vercel.app",
  },
  {
    id: "emerald-walima",
    title: "Emerald Walima",
    category: "Walima",
    price: "Rs 3000",
    names: "Hira & Usman",
    date: "02 . 04 . 2027",
    colors: ["#0F766E", "#052E2B"],
    ink: "#F7E7B0",
    image: "/images/template5.png",
    link: "https://Card-theme7.vercel.app",
  },
  {
    id: "theme-2",
    title: "Crimson Mehndi",
    category: "Mehndi",
    price: "Rs 3000",
    names: "Fatima & Hassan",
    date: "05 . 02 . 2027",
    colors: ["#DC2626", "#7F1D1D"],
    ink: "#FFF1F2",
    image: "/images/Theme2.png",
    link: "https://Card-template8.vercel.app",
  },

  {
    id: "midnight-baraat",
    title: "Midnight Baraat",
    category: "Barat",
    price: "Rs 3000",
    names: "Sana & Faisal",
    date: "18 . 12 . 2026",
    colors: ["#2B1055", "#7597DE"],
    ink: "#FFFFFF",
    image: "/images/Theme1.png",
    link: "https://Card-template9.vercel.app",
  },
  {
    id: "theme-12",
    title: "Golden Nikah",
    category: "Nikah",
    price: "Rs 3000 ",
    names: "Maham & Owais",
    date: "08 . 03 . 2027",
    colors: ["#FDE68A", "#92400E"],
    ink: "#3B2208",
    image: "/images/Theme12.png",
    link: "https://Card-template10.vercel.app",
  },

  {
    id: "floral-garden",
    title: "Floral Garden",
    category: "Nikah",
    price: "Rs 2000",
    names: "Iqra & Saad",
    date: "11 . 05 . 2027",
    colors: ["#86EFAC", "#F472B6"],
    ink: "#2A1424",
    image: "/images/Theme8.png",
    link: "https://Card-template11.vercel.app",
  },
  {
    id: "golden-mughal",
    title: "Golden Mughal",
    category: "Barat",
    price: "Rs 2000",
    names: "Zainab & Ali",
    date: "09 . 01 . 2027",
    colors: ["#3B0A1E", "#B8860B"],
    ink: "#FFE8A3",
    image: "/images/Theme9.png",
    link: "https://Card-template12.vercel.app",
  },
];

export const plans = [
  {
    name: "Basic",
    price: "2,999",
    note: "Chhoti ghar ki taqreeb ke liye",
    features: [
      "1 digital card theme",
      "Names, date, venue",
      "WhatsApp share link",
      "1 revision",
      "Delivery in  just Minutes ",
    ],
    popular: false,
  },
  {
    name: "Premium",
    price: "5,999",
    note: "Sab se zyada pasand kiya gaya",
    features: [
      "Animated card + music",
      "Google Maps location",
      "RSVP button",
      "3 revisions",
      "Delivery in just hours",
      "Custom colors",
    ],
    popular: true,
  },
  {
    name: "Royal",
    price: "9,999",
    note: "Poori shaadi ke har function ke liye",
    features: [
      "Mehndi + Barat + Walima cards",
      "Mini wedding website",
      "Photo gallery & video",
      "Unlimited revisions",
      "Guest RSVP list",
      "Priority support",
    ],
    popular: false,
  },
];

export const faqs = [
  {
    q: "Card kitne din me tayyar hota hai?",
    a: "Basic 24 ghante, Premium 12 ghante aur Royal priority par hota hai. Details milte hi kaam shuru.",
  },
  {
    q: "Kya main apni pasand ke rang change kar sakta hoon?",
    a: "Ji, Premium aur Royal me custom colors aur fonts shamil hain.",
  },
  {
    q: "Card share kaise karun?",
    a: "Aap ko ek link milta hai jo WhatsApp, Instagram ya kisi bhi jagah share ho sakta hai.",
  },
  {
    q: "Payment kaise hoti hai?",
    a: "Easypaisa, JazzCash ya bank transfer. Aadhi advance, baqi delivery par.",
  },
];
