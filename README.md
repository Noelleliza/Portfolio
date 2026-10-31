# Portfolio UX & service design

Portfolio responsive construit avec React, TypeScript et Vite, déployable sur Vercel. Les projets peuvent être lus depuis Supabase ; le site utilise la clé publique et la table protège les brouillons par Row Level Security.

## Développement et build

```sh
pnpm install
pnpm dev
pnpm build
```

## Connexion Supabase

1. Créez un projet Supabase.
2. Exécutez `supabase/schema.sql` dans l’éditeur SQL du projet.
3. Ajoutez les projets dans `public.projects`. Seuls les enregistrements avec `published = true` apparaissent sur le site.
4. Copiez `.env.example` vers `.env.local` et renseignez `VITE_SUPABASE_URL` et `VITE_SUPABASE_ANON_KEY` avec l’URL et la clé publique (publishable/anon) du projet.
5. N’utilisez jamais la clé `service_role` dans le navigateur.

La politique RLS autorise la lecture des projets publiés et interdit l’écriture par les visiteurs. Les modifications se font actuellement dans le tableau de bord Supabase ; une interface d’administration sécurisée n’est pas incluse.

## Déploiement Vercel

Importez le dépôt Git qui contient ce dossier comme projet Vercel. Répertoire racine : `outputs/portfolio` si le dépôt contient le dossier parent. La configuration de build est dans `vercel.json` (`pnpm install --frozen-lockfile`, `pnpm run build`, sortie `dist`). Ajoutez les deux variables Supabase dans les paramètres d’environnement Vercel, puis redéployez.

## À personnaliser avant publication

- Remplacer le monogramme, le positionnement, la biographie et les expériences.
- Supprimer les trois contenus de démonstration et insérer des études de cas réelles, vérifiées et publiables dans Supabase.
- Remplacer `bonjour@exemple.fr` par une adresse fonctionnelle.
- Ajouter le CV PDF dans `public/cv.pdf`.
- Mettre à jour le titre et la description dans `index.html`, ainsi que l’année du pied de page.

Les exemples initiaux ne décrivent pas un parcours ou des résultats réels. Les visuels sont des compositions CSS.
