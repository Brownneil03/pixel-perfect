import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Phone, Mail, Instagram } from "lucide-react";
import { PageHero } from "@/components/site/Layout";
import { site, waLink } from "@/config/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & devis — RK’s Print" },
      { name: "description", content: "Contactez RK’s Print sur WhatsApp, par téléphone, e-mail ou Instagram pour un devis de design, impression ou photo." },
      { property: "og:title", content: "Contactez RK’s Print" },
      { property: "og:description", content: "Un projet ? Écrivez-nous sur WhatsApp pour discuter formats, quantités et prix." },
    ],
  }),
  component: Contact,
});

const channels = [
  { icon: MessageCircle, label: "WhatsApp", value: site.phoneDisplay, href: waLink("Bonjour RK’s Print, je souhaite des informations."), main: true },
  { icon: Phone, label: "Téléphone", value: site.phoneDisplay, href: `tel:${site.phoneIntl}` },
  { icon: Mail, label: "E-mail", value: site.email, href: `mailto:${site.email}` },
  { icon: Instagram, label: "Instagram", value: `@${site.instagram}`, href: site.instagramUrl },
];

function Contact() {
  return (
    <>
      <PageHero index="Contact" kicker="Parlons de votre projet" title={<>Dites-nous <span className="italic text-primary">tout.</span></>}>
        Options, quantités, formats, prix : le plus simple est de nous écrire sur WhatsApp, avec vos fichiers ou photos si vous en avez.
      </PageHero>
      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
        <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2">
          {channels.map(({ icon: Icon, label, value, href, main }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className={
                main
                  ? "group flex min-h-56 flex-col justify-between bg-primary p-8 text-primary-foreground"
                  : "group flex min-h-56 flex-col justify-between bg-background p-8 transition-colors hover:bg-ink hover:text-ink-foreground"
              }
            >
              <div className="flex items-center justify-between">
                <Icon className="h-6 w-6" />
                <span className="text-2xl transition-transform group-hover:-rotate-45">→</span>
              </div>
              <div className="min-w-0">
                <p className="spec opacity-70">{label}</p>
                <p className="mt-2 break-words font-display text-3xl md:text-4xl">{value}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
