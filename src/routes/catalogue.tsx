import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { categories } from "@/data/catalog";
import { PageHero } from "@/components/site/Layout";
import { Cta } from "@/components/site/Cta";
import { waLink, waProduct } from "@/config/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/catalogue")({
  head: () => ({
    meta: [
      { title: "Catalogue — Design, impression, grand format | RK’s Print" },
      { name: "description", content: "Cartes de visite, flyers, mémoires PFE, stickers, bâches, roll-ups, packaging, faire-part et albums. Tout le catalogue RK’s Print." },
      { property: "og:title", content: "Le catalogue RK’s Print" },
      { property: "og:description", content: "Design graphique, impression, grand format, packaging, mariage et albums photo au Maroc." },
    ],
  }),
  component: Catalogue,
});

function Catalogue() {
  const [active, setActive] = useState<string>("all");
  const shown = active === "all" ? categories : categories.filter((c) => c.id === active);

  return (
    <>
      <PageHero index="Catalogue" kicker="Produits & services" title={<>Tout ce que nous <span className="italic text-primary">créons.</span></>}>
        Choisissez un univers, puis cliquez sur un produit pour nous écrire directement sur WhatsApp — format, quantité et prix se discutent ensemble.
      </PageHero>

      <div className="sticky top-[73px] z-30 border-y border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 py-3 md:px-8" role="tablist" aria-label="Catégories">
          {[{ id: "all", title: "Tout" }, ...categories].map((c) => (
            <button
              key={c.id}
              role="tab"
              aria-selected={active === c.id}
              onClick={() => setActive(c.id)}
              className={cn(
                "shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                active === c.id ? "border-ink bg-ink text-ink-foreground" : "border-border hover:border-foreground",
              )}
            >
              {c.title}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {shown.map((c, idx) => (
          <section key={c.id} id={c.id} className="scroll-mt-40 border-b border-border py-20">
            <div className={cn("grid gap-12 lg:grid-cols-12", idx % 2 === 1 && "lg:[&>*:first-child]:order-2")}>
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-44">
                  <p className="spec text-primary">{c.index} — {c.kicker}</p>
                  <h2 className="mt-4 text-4xl font-medium leading-none md:text-5xl">{c.title}</h2>
                  <p className="mt-4 text-muted-foreground">{c.intro}</p>
                  <img src={c.image} alt={`Illustration — ${c.title}`} loading="lazy" className="mt-8 aspect-[4/3] w-full rounded-sm object-cover" />
                  <div className="mt-6">
                    <Cta variant="ink" href={waLink(`Bonjour RK’s Print, je souhaite un devis — ${c.title}.`)}>Demander un devis</Cta>
                  </div>
                </div>
              </div>
              <div className="grid gap-10 sm:grid-cols-2 lg:col-span-8">
                {c.groups.map((g) => (
                  <div key={g.title}>
                    <h3 className="spec border-b-2 border-foreground pb-3 text-foreground">{g.title}</h3>
                    <ul>
                      {g.items.map((item) => (
                        <li key={item}>
                          <a
                            href={waProduct(item, c.title)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between gap-3 border-b border-border py-3 transition-colors hover:text-primary"
                          >
                            <span className="min-w-0">{item}</span>
                            <span className="spec shrink-0 opacity-0 transition-opacity group-hover:opacity-100">Infos →</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
