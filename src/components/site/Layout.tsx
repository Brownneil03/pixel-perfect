import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, MessageCircle, Instagram, Mail, Phone } from "lucide-react";
import { site, waLink } from "@/config/site";

const nav = [
  { to: "/catalogue", label: "Catalogue" },
  { to: "/labo-photo", label: "Labo Photo" },
  { to: "/packs", label: "Packs" },
  { to: "/contact", label: "Contact" },
] as const;

export function Logo() {
  return (
    <Link to="/" className="flex items-baseline gap-1.5 font-display text-2xl font-semibold tracking-tight">
      RK’s<span className="italic text-primary">Print</span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Navigation principale">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-foreground/75 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={waLink("Bonjour RK’s Print, je souhaite discuter de mon projet.")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-ink-foreground transition-colors hover:bg-primary sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <button
            className="grid h-10 w-10 place-items-center rounded-full border border-border md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-border px-5 pb-6 md:hidden" aria-label="Navigation mobile">
          {nav.map((n, i) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="flex items-baseline justify-between border-b border-border py-4 font-display text-3xl"
            >
              {n.label}
              <span className="spec text-muted-foreground">0{i + 1}</span>
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <p className="font-display text-5xl leading-none md:text-8xl">
          Votre idée, <span className="italic text-primary">notre création.</span>
        </p>
        <div className="mt-14 grid gap-10 border-t border-ink-foreground/15 pt-10 md:grid-cols-4">
          <div>
            <p className="font-display text-2xl">RK’s <span className="italic text-primary">Print</span></p>
            <p className="spec mt-3 text-ink-foreground/60">{site.signature.join(" • ")}</p>
            <p className="mt-3 text-sm text-ink-foreground/60">Maroc</p>
          </div>
          <div className="space-y-2 text-sm">
            <p className="spec mb-3 text-ink-foreground/50">Explorer</p>
            {nav.map((n) => (
              <Link key={n.to} to={n.to} className="block hover:text-primary">{n.label}</Link>
            ))}
          </div>
          <div className="space-y-3 text-sm md:col-span-2">
            <p className="spec mb-3 text-ink-foreground/50">Nous joindre</p>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-primary">
              <MessageCircle className="h-4 w-4" /> WhatsApp · {site.phoneDisplay}
            </a>
            <a href={`tel:${site.phoneIntl}`} className="flex items-center gap-3 hover:text-primary">
              <Phone className="h-4 w-4" /> {site.phoneDisplay}
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-3 hover:text-primary">
              <Mail className="h-4 w-4" /> {site.email}
            </a>
            <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-primary">
              <Instagram className="h-4 w-4" /> @{site.instagram}
            </a>
          </div>
        </div>
        <p className="spec mt-14 text-ink-foreground/40">© {new Date().getFullYear()} RK’s Print · Visuels d’illustration</p>
      </div>
    </footer>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={waLink("Bonjour RK’s Print, je souhaite un devis.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Commander sur WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-[0_12px_30px_-8px_var(--primary)] transition-transform hover:scale-110"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}

export function PageHero({ index, kicker, title, children }: { index: string; kicker: string; title: ReactNode; children?: ReactNode }) {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-12 pt-16 md:px-8 md:pt-24">
      <p className="spec flex items-center gap-3 text-muted-foreground">
        <span className="text-primary">{index}</span> <span className="h-px w-10 bg-border" /> {kicker}
      </p>
      <h1 className="rise mt-6 max-w-5xl text-5xl font-medium leading-[0.95] md:text-8xl">{title}</h1>
      {children && <div className="rise mt-8 max-w-2xl text-lg text-muted-foreground [animation-delay:150ms]">{children}</div>}
    </section>
  );
}
