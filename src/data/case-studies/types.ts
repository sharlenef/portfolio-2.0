export type CaseStudyMetaItem = {
  label: string;
  values: string[];
};

export type CaseStudyResearchImage = {
  src: string;
  alt: string;
};

export type CaseStudyResearchCard = {
  title: string;
  images: CaseStudyResearchImage[];
};

export type CaseStudyKeyInsight = {
  label: string;
  description: string;
  iconSrc: string;
  iconAlt: string;
};

export type CaseStudySubsection = {
  title: string;
  body?: string;
  items?: string[];
};

export type CaseStudyScreen = {
  src: string;
  alt: string;
  caption?: string;
};

export type CaseStudyTextCard = {
  title: string;
  items: string[];
};

export type CaseStudyBlock =
  | { type: "research-cards"; cards: CaseStudyResearchCard[] }
  | {
      type: "key-insights";
      title?: string;
      subtitle: string;
      insights: CaseStudyKeyInsight[];
    }
  | { type: "subsections"; items: CaseStudySubsection[]; variant?: "accent" | "inline" }
  | {
      type: "text-cards";
      title?: string;
      subtitle?: string;
      cards: CaseStudyTextCard[];
      columns?: 2 | 3;
    }
  | { type: "sticky-notes"; title?: string; subtitle?: string; items: string[] }
  | { type: "screens"; screens: CaseStudyScreen[] }
  | { type: "figma-embed"; src: string; title?: string; heading?: string; href?: string }
  | { type: "external-link"; heading?: string; href: string; label: string };

export type CaseStudyContentSection = {
  id: string;
  title: string;
  body?: string;
  callout?: string;
  blocks?: CaseStudyBlock[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  description: string;
  accentColor: string;
  /** Card background on the landing page grid. Falls back to accentColor. */
  cardColor?: string;
  /** Text accent — defaults to accentColor. Use when accentColor is too light for text. */
  accentTextColor?: string;
  calloutBg: string;
  bannerSrc?: string;
  bannerAlt: string;
  overview: string;
  meta: CaseStudyMetaItem[];
  sections: CaseStudyContentSection[];
};
