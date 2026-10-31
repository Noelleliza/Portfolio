-- Public portfolio projects. Visitors can read published records only.
create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  kind text not null,
  year text not null,
  role text not null,
  description text not null,
  cover_style text not null default 'art-lilac' check (cover_style in ('art-lilac', 'art-green', 'art-orange')),
  tag text not null,
  context text not null,
  approach text not null,
  learning text not null,
  team text,
  duration text,
  quote text,
  tools text[] not null default '{}',
  translations jsonb not null default '{}'::jsonb,
  published boolean not null default false,
  featured boolean not null default false,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Keep existing tables compatible as case-study fields evolve.
alter table public.projects add column if not exists team text;
alter table public.projects add column if not exists duration text;
alter table public.projects add column if not exists quote text;
alter table public.projects add column if not exists tools text[] not null default '{}';
alter table public.projects add column if not exists translations jsonb not null default '{}'::jsonb;

alter table public.projects enable row level security;
revoke all on public.projects from anon, authenticated;
grant select on public.projects to anon, authenticated;
create policy "Anyone can read published projects" on public.projects
  for select to anon, authenticated using (published = true);
-- Visitors cannot insert or edit project records. Manage data in the Supabase dashboard.
