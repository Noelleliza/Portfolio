# Noëlle Lewkowicz — Portfolio UX & service design

Portfolio bilingue FR/EN construit avec React, TypeScript et Vite, déployable sur Vercel. Le français est la langue initiale. Le choix de langue est mémorisé dans le navigateur. Le CV anglais et le portrait sont servis depuis `public/`.

## Développement et build

```sh
pnpm install
pnpm dev
pnpm build
```

## Projets et Supabase

Les études de cas Legrand, Addiction Care, Digital Wallonia et Cancer patient experience sont fournies dans `src/projects.ts` en anglais et en français. Pour ajouter des cas depuis Supabase :

1. Créez un projet Supabase.
2. Exécutez `supabase/schema.sql` dans l’éditeur SQL du projet.
3. Ajoutez le contenu anglais dans les colonnes de la ligne et son contenu français dans l’objet JSON `translations.fr` (mêmes clés que le contenu de base : `title`, `kind`, `role`, `desc`, `tag`, `context`, `approach`, `learning`, `team`, `duration`, `quote`, `tools`).
4. Seuls les enregistrements `published = true` apparaissent. En français, les projets sans traduction `translations.fr` sont masqués.
5. Copiez `.env.example` vers `.env.local` et renseignez `VITE_SUPABASE_URL` et `VITE_SUPABASE_ANON_KEY` avec l’URL et la clé publique (publishable/anon) du projet.
6. N’utilisez jamais la clé `service_role` dans le navigateur.

La politique RLS autorise la lecture des projets publiés et interdit l’écriture par les visiteurs. Les modifications se font actuellement dans le tableau de bord Supabase ; aucune interface d’administration n’est incluse.

## Déploiement Vercel

Importez le dépôt Git contenant ce dossier comme projet Vercel. Si le dépôt contient le dossier parent, choisissez `outputs/portfolio` comme répertoire racine. La configuration de build est dans `vercel.json` (`pnpm install --frozen-lockfile`, `pnpm run build`, sortie `dist`). Ajoutez les variables Supabase aux paramètres d’environnement Vercel, puis redéployez.
