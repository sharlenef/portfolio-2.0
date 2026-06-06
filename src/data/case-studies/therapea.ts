import type { CaseStudy } from "./types";

export const therapea: CaseStudy = {
  slug: "therapea",
  title: "Therapea",
  description: "Case study for Therapea.",
  accentColor: "#4B2162",
  cardColor: "#E6D7EB",
  calloutBg: "#F3EDF7",
  bannerAlt: "Therapea case study banner",
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
      callout: "How might we define the core problem for Therapea?",
    },
    {
      id: "research",
      title: "Research",
      body: "Research findings coming soon.",
    },
  ],
};
