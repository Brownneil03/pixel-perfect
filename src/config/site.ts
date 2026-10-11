// Central, configurable contact info. Phone 0701799316 → Moroccan intl format +212 701 799 316.
export const site = {
  name: "RK’s Print",
  slogan: "Votre idée, notre création.",
  signature: ["Conception", "Impression", "Création"],
  phoneDisplay: "07 01 79 93 16",
  phoneIntl: "+212701799316",
  whatsapp: "212701799316",
  email: "printrks1@gmail.com",
  instagram: "rks_print",
  instagramUrl: "https://www.instagram.com/rks_print/",
} as const;

export function waLink(message?: string) {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function waProduct(product: string, context?: string) {
  return waLink(
    `Bonjour RK’s Print, je souhaite des informations sur : ${product}${context ? ` (${context})` : ""}. Merci !`,
  );
}
