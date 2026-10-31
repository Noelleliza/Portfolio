import { createClient } from '@supabase/supabase-js';
import type { Project } from './projects';
const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
export const supabaseConfigured = Boolean(url && anonKey);
const supabase = supabaseConfigured ? createClient(url!, anonKey!) : null;
export async function fetchPublishedProjects(): Promise<Project[]> {
  if (!supabase) return [];
  const { data, error } = await supabase.from('projects')
    .select('slug,title,kind,year,role,description,cover_style,tag,context,approach,learning')
    .eq('published', true).order('sort_order', { ascending: true });
  if (error) throw error;
  return (data ?? []).map((item) => ({ id: item.slug, title: item.title, kind: item.kind, year: item.year, role: item.role, desc: item.description, className: item.cover_style, tag: item.tag, context: item.context, approach: item.approach, learning: item.learning }));
}
