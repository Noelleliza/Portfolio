# Noëlle Lewkowicz — Portfolio UX & service design

Portfolio responsive construit avec React, TypeScript et Vite, déployable sur Vercel. Le CV anglais et le portrait sont servis depuis `public/`. Les projets détaillés peuvent être lus depuis Supabase ; les exemples fictifs ont été retirés.

## Développement et build

```sh
pnpm install
pnpm dev
pnpm build
```

## Connexion Supabase

1. Créez un projet Supabase.
2. Exécutez `supabase/schema.sql` dans l’éditeur SQL du projet.
3. Ajoutez les études de cas vérifiées dans `public.projects`. Seuls les enregistrements avec `published = true` apparaissent sur le site.
4. Copiez `.env.example` vers `.env.local` et renseignez `VITE_SUPABASE_URL` et `VITE_SUPABASE_ANON_KEY` avec l’URL et la clé publique (publishable/anon) du projet.
5. N’utilisez jamais la clé `service_role` dans le navigateur.

La politique RLS autorise la lecture des projets publiés et interdit l’écriture par les visiteurs. Les modifications se font actuellement dans le tableau de bord Supabase ; aucune interface d’administration n’est incluse.

## Déploiement Vercel

Importez le dépôt Git contenant ce dossier comme projet Vercel. Si le dépôt contient le dossier parent, choisissez `outputs/portfolio` comme répertoire racine. La configuration de build est dans `vercel.json` (`pnpm install --frozen-lockfile`, `pnpm run build`, sortie `dist`). Ajoutez les variables Supabase aux paramètres d’environnement Vercel, puis redéployez.

## Contenu

Le site présente le profil, l’expérience, les projets de santé mentionnés dans le CV et un lien vers le CV anglais. Les études de cas détaillées seront affichées à partir de projets réels ajoutés dans Supabase.
