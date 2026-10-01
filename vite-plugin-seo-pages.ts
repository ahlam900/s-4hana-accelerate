import fs from "fs";
import path from "path";
import type { Plugin } from "vite";

const BASE = "https://www.cbs-institute.com";

function slugs(file: string): string[] {
  const src = fs.readFileSync(path.resolve(__dirname, file), "utf8");
  return [...src.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
}

/** Emits one static HTML per public route so the initial HTML carries a self-referencing canonical. */
export default function seoPages(): Plugin {
  return {
    name: "seo-static-pages",
    apply: "build",
    closeBundle() {
      const dist = path.resolve(__dirname, "dist");
      const tpl = fs.readFileSync(path.join(dist, "index.html"), "utf8");
      const routes = [
        "/formations", "/formations/sap-fico-consultant-program",
        ...slugs("src/data/formationDetails.ts").map((s) => `/formations/${s}`),
        "/offres-entreprise", "/produits-digitaux",
        ...slugs("src/data/products.ts").map((s) => `/produits-digitaux/${s}`),
        "/a-propos", "/ressources", "/contact",
        "/mentions-legales", "/confidentialite", "/cgv", "/cookies",
      ];
      const all = ["/", ...routes];
      for (const r of all) {
        const fr = `${BASE}${r}`;
        const en = `${BASE}${r === "/" ? "/en" : `/en${r}`}`;
        for (const [route, self] of [[r, fr], [r === "/" ? "/en" : `/en${r}`, en]] as const) {
          if (route === "/") continue;
          const html = tpl
            .replace(/<link rel="canonical" href="[^"]*"/, `<link rel="canonical" href="${self}"`)
            .replace(/<meta property="og:url" content="[^"]*"/, `<meta property="og:url" content="${self}"`)
            .replace(/(hreflang="fr" href=")[^"]*"/, `$1${fr}"`)
            .replace(/(hreflang="en" href=")[^"]*"/, `$1${en}"`)
            .replace(/(hreflang="x-default" href=")[^"]*"/, `$1${fr}"`);
          const out = path.join(dist, route.slice(1), "index.html");
          fs.mkdirSync(path.dirname(out), { recursive: true });
          fs.writeFileSync(out, html);
        }
      }
    },
  };
}
