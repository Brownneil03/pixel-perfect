import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check } from "lucide-react";
import { packs, type Pack } from "@/data/catalog";
import { PageHero } from "@/components/site/Layout";
import { waLink } from "@/config/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/packs")({
  head: () => ({
    meta: [
      { title: "Packs personnalisables — Soutenance, Mariage, Entreprise | RK’s Print" },
      { name: "description", content: "Six packs flexibles : Soutenance, Mariage, Entreprise, Petite entreprise, Photo & souvenirs et Sur-mesure. Composez le vôtre." },
      { property: "og:title", content: "Les packs RK’s Print" },
      { property: "og:description", content: "Choisissez uniquement les produits dont vous avez besoin, puis envoyez votre pack sur WhatsApp." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Packs,
});

function PackCard({ pack, flip }: { pack: Pack; flip: boolean }) {
  const [selected, setSelected] = useState<string[]>([]);
  const [note, setNote] = useState("");
  const toggle = (i: string) => setSelected((s) => (s.includes(i) ? s.filter((x) => x !== i) : [...s, i]));

  const message = [
    `Bonjour RK’s Print, je souhaite personnaliser le Pack ${pack.number} — ${pack.name}.`,
    selected.length ? `Produits choisis :\n${selected.map((s) => `• ${s}`).join("\n")}` : "J’aimerais être conseillé(e) sur le contenu.",
    note.trim() ? `Précisions : ${note.trim()}` : "",
  ]
    .filter(Boolean)
    .join("\n\n");

  return (
    <section id={pack.id} className="scroll-mt-24 border-t border-foreground py-16">
      <div className={cn("grid gap-10 lg:grid-cols-12", flip && "lg:[&>*:first-child]:order-2")}>
        <div className="lg:col-span-5">
          <p className="spec text-primary">Pack {pack.number} · {pack.audience}</p>
          <h2 className="mt-4 text-5xl font-medium leading-none md:text-7xl">{pack.name}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{pack.pitch}</p>
          {pack.image ? (
            <img src={pack.image} alt={`Simulation de produits — pack ${pack.name}`} loading="lazy" className="mt-8 h-auto w-full rounded-sm" />
          ) : (
            <div className="paper-grain crop mt-8 grid aspect-[4/3] place-items-center rounded-sm border border-dashed border-foreground/40 p-8 text-center">
              <p className="font-display text-3xl italic">Votre projet est unique.<br /><span className="text-primary">Votre pack aussi.</span></p>
            </div>
          )}
        </div>
        <div className="lg:col-span-7">
          <div className="flex items-baseline justify-between">
            <p className="spec">Composez votre pack</p>
            <p className="spec text-muted-foreground">{selected.length} sélectionné{selected.length > 1 ? "s" : ""}</p>
          </div>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {pack.items.map((i) => {
              const on = selected.includes(i);
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => toggle(i)}
                  aria-pressed={on}
                  className={cn(
                    "flex items-center gap-3 rounded-sm border px-4 py-3 text-left text-sm transition-colors",
                    on ? "border-ink bg-ink text-ink-foreground" : "border-border bg-card hover:border-foreground",
                  )}
                >
                  <span className={cn("grid h-5 w-5 shrink-0 place-items-center rounded-full border", on ? "border-primary bg-primary text-primary-foreground" : "border-foreground/30")}>
                    {on && <Check className="h-3 w-3" />}
                  </span>
                  <span className="min-w-0">{i}</span>
                </button>
              );
            })}
          </div>
          <label className="mt-6 block">
            <span className="spec text-muted-foreground">Précisions (quantités, date, formats…)</span>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={2}
              maxLength={500}
              className="mt-2 w-full rounded-sm border border-input bg-card px-4 py-3 text-sm outline-none focus:border-primary"
            />
          </label>
          <a
            href={waLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Personnaliser mon pack sur WhatsApp →
          </a>
          <p className="mt-3 text-xs text-muted-foreground">Contenu indicatif et flexible — prix sur devis selon votre sélection.</p>
        </div>
      </div>
    </section>
  );
}

function Packs() {
  return (
    <>
      <PageHero index="Packs" kicker="Six combinaisons flexibles" title={<>Un pack, <span className="italic text-primary">votre</span> sélection.</>}>
        Pas d’abonnement, pas de contenu imposé. Cochez ce dont vous avez besoin : votre demande arrive pré-remplie sur WhatsApp.
      </PageHero>
      <nav className="mx-auto flex max-w-7xl flex-wrap gap-2 px-5 pb-12 md:px-8" aria-label="Packs">
        {packs.map((p) => (
          <a key={p.id} href={`#${p.id}`} className="rounded-full border border-border px-4 py-2 text-sm hover:border-foreground">
            <span className="spec mr-2 text-primary">{p.number}</span>{p.name}
          </a>
        ))}
      </nav>
      <div className="mx-auto max-w-7xl px-5 pb-16 md:px-8">
        {packs.map((p, i) => (
          <PackCard key={p.id} pack={p} flip={i % 2 === 1} />
        ))}
      </div>
    </>
  );
}
