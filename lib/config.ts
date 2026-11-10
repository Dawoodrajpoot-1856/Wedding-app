export const site = {
  name: "Wedding Invites",
  tagline: "Digital wedding cards jo dil jeet lein",
  whatsapp: "923377544813", // Pakistan: 92 + number (shuru ka 0 aur + nahi)
  phone: "+92 337 7544813",
  email: "dawoodraj1856@gmail.com",
  instagram: "https://instagram.com/yourpage",
  facebook: "https://facebook.com/yourpage",
  tiktok: "https://tiktok.com/@yourpage",
  address: "Bahawalpur, Pakistan",
};

export const waLink = (msg: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;
