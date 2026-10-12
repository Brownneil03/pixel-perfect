import { createFileRoute, Link } from "@tanstack/react-router";
import largeFormat from "@/assets/rkprint-signage.jpg";
import photoAlbum from "@/assets/photo-album.jpg";
import idPhoto from "@/assets/id-photo.jpg";
import { brandShowcase, categories, homeHero, packs } from "@/data/catalog";
import { Cta, ctaVariants } from "@/components/site/Cta";
import { waLink } from "@/config/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RK’s Print — Votre idée, notre création" },
      { name: "description", content: "Design graphique, impression, grand format, packaging, mariage et labo photo au Maroc. Devis rapide sur WhatsApp." },
      { property: "og:title", content: "RK’s Print — Votre idée, notre création" },
      { property: "og:description", content: "Conception • Impression • Création. De l’idée au produit fini, au Maroc." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const ticker = ["Logos", "Cartes de visite", "Roll-ups", "Bâches", "Packaging", "Faire-part", "Photos d’identité", "Albums Best Of", "Mémoires PFE", "Vitrophanie", "Stickers", "Menus"];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-hero-surface text-ink-foreground">
        <img src={homeHero.image} alt={homeHero.alt} width={1920} height={1024} fetchPriority="high" className="absolute inset-x-0 bottom-0 -z-10 h-[300px] w-full object-cover object-right md:inset-0 md:h-full md:object-center" />
        <div className="mx-auto flex max-w-7xl items-center px-5 pb-[330px] pt-10 md:min-h-[550px] md:px-8 md:py-14 lg:min-h-[620px]">
          <div className="max-w-md md:w-[43%] lg:max-w-lg">
            <p className="spec text-ink-foreground/75">{homeHero.signature}</p>
            <h1 className="rise mt-6 text-6xl font-medium leading-none lg:text-7xl">{homeHero.brand}</h1>
            <p className="rise mt-5 font-display text-4xl italic leading-tight lg:text-5xl">{homeHero.slogan}</p>
            <p className="rise mt-6 max-w-sm text-base leading-relaxed text-ink-foreground/80 [animation-delay:150ms]">{homeHero.description}</p>
            <div className="rise mt-8 flex flex-wrap gap-3 [animation-delay:250ms]">
              <Cta href={waLink("Bonjour RK’s Print, je souhaite discuter de mon projet.")}>{homeHero.contactLabel}</Cta>
              <Link to="/catalogue" className={ctaVariants({ variant: "ghostLight" })}>{homeHero.catalogueLabel} <span aria-hidden>↗</span></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ticker */}
      <div className="overflow-hidden border-y border-border bg-ink py-5 text-ink-foreground" aria-hidden>
        <div className="marquee flex w-max gap-10 whitespace-nowrap font-display text-3xl italic">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} className="flex items-center gap-10">
              {t} <span className="text-primary not-italic">✦</span>
            </span>
          ))}
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-5 pt-20 md:px-8">
        <h2 className="text-4xl font-medium leading-tight md:text-6xl">{brandShowcase.title}</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {brandShowcase.items.map((item) => (
            <figure key={item.title} className="min-w-0">
              <img src={item.image} alt={item.alt} loading="lazy" width={1536} height={1024} className="aspect-[3/2] w-full rounded-sm object-contain" />
              <figcaption className="mt-5 border-t border-border pt-4">
                <p className="spec text-primary">{item.label}</p>
                <h3 className="mt-2 text-2xl leading-tight">{item.title}</h3>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Index of activities */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="max-w-2xl text-4xl font-medium leading-tight md:text-6xl">
            Bien plus qu’une <span className="italic">imprimerie.</span>
          </h2>
          <p className="max-w-sm text-muted-foreground">Design seul, impression seule, ou les deux. Six univers, un seul interlocuteur.</p>
        </div>
        <ol className="mt-14 border-t border-foreground">
          {categories.map((c) => (
            <li key={c.id}>
              <Link
                to="/catalogue"
                hash={c.id}
                className="group grid grid-cols-[3rem_minmax(0,1fr)_auto] items-center gap-4 border-b border-border py-6 transition-colors hover:bg-card md:grid-cols-[5rem_minmax(0,1fr)_20rem_auto] md:py-8"
              >
                <span className="spec text-primary">{c.index}</span>
                <span className="font-display text-2xl transition-transform group-hover:translate-x-2 md:text-5xl">{c.title}</span>
                <span className="hidden text-sm text-muted-foreground md:block">{c.intro}</span>
                <span className="text-2xl transition-transform group-hover:-rotate-45">→</span>
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/labo-photo"
              className="group grid grid-cols-[3rem_minmax(0,1fr)_auto] items-center gap-4 border-b border-border py-6 transition-colors hover:bg-card md:grid-cols-[5rem_minmax(0,1fr)_20rem_auto] md:py-8"
            >
              <span className="spec text-primary">07</span>
              <span className="font-display text-2xl italic transition-transform group-hover:translate-x-2 md:text-5xl">Labo Photo & Souvenirs</span>
              <span className="hidden text-sm text-muted-foreground md:block">Photos d’identité, tirages, albums et collections Best Of.</span>
              <span className="text-2xl transition-transform group-hover:-rotate-45">→</span>
            </Link>
          </li>
        </ol>
      </section>

      {/* Large format feature */}
      <section className="bg-ink text-ink-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 md:grid-cols-2 md:px-8">
          <img src={largeFormat} alt="Illustration d’un roll-up et d’un grand panneau publicitaire" loading="lazy" width={1200} height={1408} className="aspect-[4/5] w-full rounded-sm object-cover" />
          <div>
            <p className="spec text-primary">03 — Grand format</p>
            <h2 className="mt-6 text-5xl font-medium leading-none md:text-7xl">
              Voyez <span className="italic">grand.</span>
            </h2>
            <p className="mt-6 max-w-md text-ink-foreground/70">
              Bâches, panneaux PVC, roll-ups, X-banners, photocalls, vitrophanie, lettrage adhésif et habillage véhicule. Votre message, à l’échelle de la rue.
            </p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {["Bâches", "Panneaux PVC", "Roll-ups", "Photocalls", "Vitrophanie", "Habillage véhicule", "Panneaux immobiliers"].map((t) => (
                <li key={t} className="rounded-full border border-ink-foreground/25 px-3 py-1.5 text-sm">{t}</li>
              ))}
            </ul>
            <div className="mt-10">
              <Cta variant="primary" href={waLink("Bonjour RK’s Print, je souhaite un devis pour de l’impression grand format.")}>Demander un devis</Cta>
            </div>
          </div>
        </div>
      </section>

      {/* Photo lab teaser */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <div className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="spec text-primary">07 — Labo Photo</p>
            <h2 className="mt-6 text-5xl font-medium leading-none md:text-7xl">
              Des photos que l’on <span className="italic">tient en main.</span>
            </h2>
            <p className="mt-6 text-muted-foreground">
              Photos d’identité, passeport et visa. Tirages, agrandissements, collages. Albums de mariage et collections Best Of pour vos plus beaux moments.
            </p>
            <Link to="/labo-photo" className="mt-8 inline-flex items-center gap-2 border-b-2 border-primary pb-1 font-semibold">
              Entrer dans le labo →
            </Link>
          </div>
          <div className="grid grid-cols-5 gap-4 md:col-span-7">
            <img src={photoAlbum} alt="Illustration d’un album photo de mariage ouvert" loading="lazy" width={1408} height={1008} className="col-span-3 aspect-[3/4] h-full w-full rounded-sm object-cover" />
            <div className="col-span-2 flex flex-col gap-4">
              <img src={idPhoto} alt="Illustration d’une planche de photos d’identité" loading="lazy" width={1008} height={1008} className="aspect-square w-full rounded-sm object-cover object-[30%_80%]" />
              <div className="flex flex-1 flex-col justify-end rounded-sm bg-primary p-5 text-primary-foreground">
                <p className="font-display text-3xl italic leading-none">Best Of</p>
                <p className="spec mt-2 opacity-80">Mariage · Famille · Graduation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packs */}
      <section className="paper-grain border-t border-border">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="text-4xl font-medium md:text-6xl">Six packs, <span className="italic text-primary">à votre façon.</span></h2>
            <Link to="/packs" className="font-semibold underline decoration-primary decoration-2 underline-offset-8">Personnaliser mon pack →</Link>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {packs.map((p) => (
              <Link
                key={p.id}
                to="/packs"
                hash={p.id}
                className="group flex min-h-56 flex-col justify-between gap-5 bg-background p-7 transition-colors hover:bg-ink hover:text-ink-foreground"
              >
                <div className="flex items-start justify-between">
                  <span className="spec text-primary">Pack {p.number}</span>
                  <span className="text-xl transition-transform group-hover:-rotate-45">→</span>
                </div>
                {p.image && <img src={p.image} alt={`Simulation de produits du pack ${p.name}`} loading="lazy" width={1200} height={900} className="aspect-[4/3] w-full rounded-sm object-cover" />}
                <div>
                  <h3 className="text-3xl font-medium">{p.name}</h3>
                  <p className="mt-2 text-sm opacity-70">{p.pitch}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <h2 className="text-4xl font-medium md:text-6xl">De l’idée <span className="italic">à l’objet.</span></h2>
        <div className="mt-12 grid gap-10 md:grid-cols-4">
          {[
            ["Votre idée", "Une envie, un fichier, une photo ou un besoin précis."],
            ["Échange", "On en parle sur WhatsApp : formats, quantités, options."],
            ["Conception", "Nous créons ou préparons vos fichiers pour l’impression."],
            ["Réalisation", "Impression, finition et votre produit prêt à être utilisé."],
          ].map(([t, d], i) => (
            <div key={t} className="border-t-2 border-foreground pt-5">
              <span className="spec text-primary">Étape 0{i + 1}</span>
              <h3 className="mt-3 text-2xl">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-sm bg-primary p-8 text-primary-foreground md:flex-row md:items-center md:p-12">
          <p className="font-display text-3xl md:text-5xl">Un projet en tête ?</p>
          <Cta variant="ink" size="lg" href={waLink("Bonjour RK’s Print, je souhaite un devis.")}>Commander sur WhatsApp</Cta>
        </div>
      </section>
    </>
  );
}
