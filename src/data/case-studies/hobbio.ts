import type { CaseStudy } from "./types";

export const hobbio: CaseStudy = {
  slug: "hobbio",
  title: "Hobbio",
  description:
    "Case study for Hobbio, a social platform connecting people to share hobbies and cultivate community through shared interests.",
  accentColor: "#00473E",
  cardColor: "#F2F7F5",
  calloutBg: "#F3F7F5",
  bannerSrc: "/works/hobbio/hobbio_banner.png",
  bannerAlt: "Hobbio — Take hobby learning beyond self learning",
  overview:
    "Do you want to start a new hobby? Do you want to try something new but don't know where to start? Hobbio is a social platform that connects people with different skillsets to foster the sharing of hobbies and to cultivate community through shared interest.",
  meta: [
    { label: "Role", values: ["Product Designer", "UX Researcher"] },
    { label: "Timeline", values: ["01/2023–05/2023"] },
    { label: "Tools", values: ["Figma"] },
    {
      label: "Skills",
      values: ["User Research", "UIUX Design", "Wireframes", "Prototyping"],
    },
  ],
  sections: [
    {
      id: "problem",
      title: "Problem",
      body: "Finding a new hobby can be difficult, especially if it's a hobby that has a steep learning curve or is simply a big investment to just even begin. Many people pick up hobbies to help them foster more social connections, however, environmental and resource limitations challenge many learners when picking up a new hobby. A lot of hobbies like rock climbing and ceramics require special facilities for the hobby to be done.",
      callout:
        "How might young adults living in urban U.S. communities learn new hobbies that require special environments or equipments so that they can establish interpersonal relationships through shared interests?",
    },
    {
      id: "research",
      title: "Research",
      body: "We defined the problem through market research, user interviews, and literature review to figure out what users value.",
    },
  ],
};
