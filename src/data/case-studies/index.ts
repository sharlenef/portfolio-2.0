import { bessy } from "./bessy";
import { getwell } from "./getwell";
import { hobbio } from "./hobbio";
import { therapea } from "./therapea";
import type { CaseStudy } from "./types";

export const caseStudies: CaseStudy[] = [hobbio, bessy, therapea, getwell];

export const caseStudiesBySlug = Object.fromEntries(
  caseStudies.map((study) => [study.slug, study])
) as Record<string, CaseStudy>;

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudiesBySlug[slug];
}

export function getAccentTextColor(study: CaseStudy): string {
  return study.accentTextColor ?? study.accentColor;
}

export function getCardColor(study: CaseStudy): string {
  return study.cardColor ?? study.accentColor;
}

export function getHeroTextColor(study: CaseStudy): string {
  if (study.slug === "bessy") return "#7A4B00";
  if (study.slug === "getwell") return getAccentTextColor(study);
  return "#ffffff";
}
