export type Project = {
  id: string;
  title: string;
  kind: string;
  year: string;
  role: string;
  desc: string;
  className: string;
  tag: string;
  context: string;
  approach: string;
  learning: string;
  team?: string;
  duration?: string;
};

// No sample case studies are shown. Detailed cases can be added once their
// public facts, contribution, and outcomes are supplied and approved.
export const projects: Project[] = [];
