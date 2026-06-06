import type { CaseStudy } from "./types";

export const getwell: CaseStudy = {
  slug: "getwell",
  title: "GetWell",
  description: "Case study for GetWell.",
  accentColor: "#D8E7F5",
  accentTextColor: "#1A5F8A",
  calloutBg: "#D8E7F5",
  bannerAlt: "GetWell case study banner",
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
      callout: "How might we define the core problem for GetWell?",
    },
    {
      id: "research",
      title: "Research",
      body: "Research findings coming soon.",
    },
  ],
};
