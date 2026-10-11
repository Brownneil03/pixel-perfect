import { createFileRoute } from "@tanstack/react-router";
import photoAlbum from "@/assets/photo-album.jpg";
import idPhoto from "@/assets/id-photo.jpg";
import soutenance from "@/assets/soutenance.jpg";
import { photoLab } from "@/data/catalog";
import { PageHero } from "@/components/site/Layout";
import { Cta } from "@/components/site/Cta";
import { waLink, waProduct } from "@/config/site";

export const Route = createFileRoute("/labo-photo")({
  head: () => ({
    meta: [
      { title: "Labo Photo & Souvenirs — Identité, tirages, albums | RK’s Print" },
      { name: "description", content: "Photos d’identité, passeport et visa, tirages, agrandissements, albums de mariage et collections Best Of au Maroc." },
      { property: "og:title", content: "Labo Photo & Souvenirs — RK’s Print" },
      { property: "og:description", content: "Photos d’identité, tirages, albums et Best Of : vos souvenirs, imprimés avec soin." },
    ],
  }),
  component: Labo,
});

function Chips({ items, context }: { items: string[]; context: string }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((i) => (
        <li key={i}>
          <a
            href={waProduct(i, context)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full border border-current/25 px-4 py-2 text-sm transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
          >
            {i}
          </a>
        </li>
      ))}
    </ul>
  );
}

function Labo() {
  return (
    <>
      <PageHero index="07" kicker="Labo Photo & Souvenirs" title={<>Vos images, <span className="italic text-primary">sur papier.</span></>}>
        Une vraie activité de laboratoire photo : formats officiels, tirages, albums et collections Best Of pour garder vos moments importants.
      </PageHero>

      {/* Identity */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:px-8">
        <img src={idPhoto} alt="Illustration d’une planche de photos d’identité" width={1008} height={1008} className="aspect-square w-full rounded-sm object-cover object-[30%_85%]" />
        <div>
          <p className="spec text-primary">A — Identité & administratif</p>
          <h2 className="mt-4 text-4xl font-medium md:text-6xl">Photos d’identité</h2>
          <p className="mt-4 text-muted-foreground">
            CNIE, passeport, visa et autres formats officiels. Vous ne savez pas quel format choisir pour votre dossier ? Demandez-nous avant de venir.
          </p>
          <div className="mt-8"><Chips items={photoLab.identity} context="Photo d’identité" /></div>
          <div className="mt-8">
            <Cta href={waLink("Bonjour RK’s Print, quel format de photo me faut-il pour mon document ? (CNIE / passeport / visa…)")}>Quel format pour mon document ?</Cta>
          </div>
        </div>
      </section>

      {/* Best Of — feature */}
      <section className="bg-ink text-ink-foreground">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="spec text-primary">B — Albums & Best Of</p>
              <h2 className="mt-4 text-5xl font-medium leading-none md:text-8xl">
                Best <span className="italic text-primary">Of.</span>
              </h2>
              <p className="mt-6 text-ink-foreground/70">
                Le meilleur d’un mariage, d’une soutenance ou d’une vie de famille, sélectionné, mis en page et relié en un objet à transmettre.
              </p>
              <div className="mt-8"><Chips items={photoLab.bestOf} context="Album / Best Of" /></div>
            </div>
            <div className="grid grid-cols-2 gap-4 lg:col-span-7">
              <img src={photoAlbum} alt="Illustration d’un album de mariage" loading="lazy" className="col-span-2 aspect-[16/10] w-full rounded-sm object-cover" />
              <img src={soutenance} alt="Illustration de mémoires reliés et photos de graduation" loading="lazy" className="aspect-square w-full rounded-sm object-cover" />
              <div className="flex flex-col justify-between rounded-sm border border-ink-foreground/20 p-6">
                {["Mariage", "Événement", "Famille", "Graduation", "Soutenance"].map((t) => (
                  <p key={t} className="font-display text-xl italic md:text-2xl">Best Of {t}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prints + retouch */}
      <section className="mx-auto grid max-w-7xl gap-16 px-5 py-24 md:grid-cols-2 md:px-8">
        <div>
          <p className="spec text-primary">C — Tirages</p>
          <h2 className="mt-4 text-4xl font-medium">Tirages & agrandissements</h2>
          <p className="mt-3 text-muted-foreground">Du tirage classique à la composition personnalisée.</p>
          <div className="mt-6"><Chips items={photoLab.prints} context="Tirage photo" /></div>
        </div>
        <div>
          <p className="spec text-primary">D — Retouche</p>
          <h2 className="mt-4 text-4xl font-medium">Retouche & personnalisation</h2>
          <p className="mt-3 text-muted-foreground">Amélioration, mise en page et produits photo sur mesure.</p>
          <div className="mt-6"><Chips items={photoLab.retouch} context="Retouche photo" /></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 rounded-sm bg-primary p-8 text-primary-foreground md:flex-row md:items-center md:p-12">
          <p className="font-display text-3xl md:text-5xl">Envoyez-nous vos photos.</p>
          <Cta variant="ink" size="lg" href={waLink("Bonjour RK’s Print, je souhaite faire imprimer des photos / un album.")}>Commander sur WhatsApp</Cta>
        </div>
      </section>
    </>
  );
}
