import type { CaseStudy } from "./types";

export const bessy: CaseStudy = {
  slug: "bessy",
  title: "Bessy",
  description: "Case study for Bessy.",
  accentColor: "#FFB34D",
  cardColor: "#FADBB1",
  accentTextColor: "#7A4B00",
  calloutBg: "#FFF5E6",
  bannerAlt: "Bessy case study banner",
  overview: "Case study overview coming soon.",
  meta: [
    { label: "Role", values: ["Product Designer"] },
    { label: "Timeline", values: ["TBD"] },
    { label: "Tools", values: ["Figma"] },
    { label: "Skills", values: ["UIUX Design", "Prototyping"] },
  ],
  sections: [
    {
      id: "problem",
      title: "Problem",
      body: "Problem statement coming soon.",
      callout: "How might we define the core problem for Bessy?",
    },
    {
      id: "research",
      title: "Research",
      body: "Research findings coming soon.",
    },
  ],
};
