import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header, Footer, FloatingWhatsApp } from "@/components/site/Layout";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-8xl font-medium text-primary">404</h1>
        <h2 className="mt-4 text-2xl">Page introuvable</h2>
        <p className="mt-2 text-sm text-muted-foreground">Cette page n’existe pas ou a été déplacée.</p>
        <Link to="/" className="mt-6 inline-flex rounded-full bg-ink px-5 py-3 text-sm font-semibold text-ink-foreground">
          Retour à l’accueil
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-2xl">Cette page n’a pas pu se charger</h1>
        <p className="mt-2 text-sm text-muted-foreground">Une erreur est survenue. Réessayez ou revenez à l’accueil.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
          >
            Réessayer
          </button>
          <a href="/" className="rounded-full border border-border px-5 py-3 text-sm font-semibold">
            Accueil
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "RK’s Print — Conception • Impression • Création" },
      { name: "description", content: "Design graphique, impression, grand format, packaging, papeterie de mariage et labo photo au Maroc." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png?v=2", type: "image/png" },
      { rel: "icon", href: "/favicon-32.png?v=2", sizes: "32x32", type: "image/png" },
      { rel: "shortcut icon", href: "/favicon.ico?v=2" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png?v=2" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700&family=JetBrains+Mono:wght@400;500&family=Manrope:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </QueryClientProvider>
  );
}
