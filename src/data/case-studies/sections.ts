import type { CaseStudy } from "./types";

export const defaultSidebarSections = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "research", label: "Research" },
  { id: "ideation", label: "Ideation" },
  { id: "solutions", label: "Solution" },
  { id: "learning", label: "Learnings" },
];

export function getSidebarSections(study: CaseStudy) {
  return [
    { id: "overview", label: "Overview" },
    ...study.sections.map((section) => ({
      id: section.id,
      label: section.title,
    })),
  ];
}
