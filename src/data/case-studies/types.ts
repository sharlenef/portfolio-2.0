export type CaseStudyMetaItem = {
  label: string;
  values: string[];
};

export type CaseStudyContentSection = {
  id: string;
  title: string;
  body?: string;
  callout?: string;
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
