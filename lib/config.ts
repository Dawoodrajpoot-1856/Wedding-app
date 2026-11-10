export const site = {
  name: "Ahads Invites",
  tagline: "Digital wedding cards jo dil jeet lein",
  whatsapp: "923191749315", // Pakistan: 92 + number (shuru ka 0 aur + nahi)
  phone: "+92 3191749315",
  email: "ahadkhan777prp@gmail.com",
  instagram: "https://instagram.com/yourpage",
  facebook: "https://facebook.com/yourpage",
  tiktok: "https://tiktok.com/@yourpage",
  address: "Bahawalpur, Pakistan",
};

export const waLink = (msg: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;
