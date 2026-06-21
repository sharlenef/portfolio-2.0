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
      blocks: [
        {
          type: "research-cards",
          cards: [
            {
              title: "User Research – Surveys & Interviews",
              images: [
                {
                  src: "/survey.png",
                  alt: "Hobbio survey questions document",
                },
                {
                  src: "/interview.png",
                  alt: "Hobbio user interview script",
                },
              ],
            },
            {
              title: "Market Research & Literature Review",
              images: [
                {
                  src: "/market_research.png",
                  alt: "Competitive analysis and market research screenshots",
                },
                {
                  src: "/literature_review.png",
                  alt: "Literature review insights grid",
                },
              ],
            },
          ],
        },
        {
          type: "key-insights",
          subtitle:
            "There are 3 main points that people value in relation to learning a hobby",
          insights: [
            {
              label: "Community building",
              description:
                "People prefer to take on new challenges together rather than alone.",
              iconSrc: "/diversity_1.png",
              iconAlt: "Community building icon",
            },
            {
              label: "Free exchange of knowledge",
              description:
                "Many people are deferred from learning new hobbies due to money",
              iconSrc: "/book_ribbon.png",
              iconAlt: "Free exchange of knowledge icon",
            },
            {
              label: "Teachers they can trust",
              description:
                "People want trustworthy and dependable teachers to successfully learn a new hobby",
              iconSrc: "/school.png",
              iconAlt: "Teachers they can trust icon",
            },
          ],
        },
      ],
    },
    {
      id: "ideation",
      title: "Ideation",
      body: "After synthesizing our research, we explored how Hobbio could help learners discover hobbies, connect with others, and find teachers they trust—grounding our design in the values and ethical considerations below.",
      blocks: [
        {
          type: "sticky-notes",
          title: "Values",
          subtitle:
            "To guide our design, we mapped values across three perspectives—my values, my sponsor's/stakeholders' values, and my users' values—and distilled the shared principles.",
          items: [
            "Safety",
            "Community",
            "Respect",
            "Self-growth",
            "Fun",
            "Education / Active Learning",
            "Practicality",
            "Social",
            "Support",
            "Transparency",
            "Accessibility",
            "Open-mindedness",
          ],
        },
        {
          type: "text-cards",
          title: "Ethical Considerations",
          subtitle:
            "We identified ethical issues that could arise when connecting learners and teachers, and considered how our product could address them responsibly.",
          cards: [
            {
              title: "Misinformation",
              items: [
                "Current solutions (YouTube, TikTok, etc.) have lots of tutorial videos, but we can't confirm whether they're accurate.",
                "Hard to quantify the skill level of the individual's hobby.",
                "Lots of information is user submitted content; anyone can be a teacher.",
              ],
            },
            {
              title: "Meeting in-person",
              items: [
                "Meeting in person actually strengthens bonds.",
                "Doing hobbies with another person helps get and stay interested in it.",
                "There is more accountability learning in an in-person setting.",
                "Having instant feedback and a synchronous learning environment feels better for the learner.",
              ],
            },
            {
              title: "Data Privacy",
              items: [
                "Collect information regarding user's interest to cater the experience towards them.",
                "Lots of current solutions have strong privacy settings and a block/report feature for their social aspects.",
                "Many people publish information regarding their interest and can teach others as well.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "solutions",
      title: "Solution",
      body: "The final product connects learners with trusted teachers through an intuitive browse-and-book experience. Through this, learners can discover hobbies, connect with others, and find teachers they trust. Try the hi-fidelity prototype or visit the live app.",
      blocks: [
        {
          type: "figma-embed",
          heading: "Hi-fidelity prototype",
          src: "https://embed.figma.com/proto/m9JohNBB7WUI7WxmxCj6IM/Capybara-Hi-fidelity-Prototype?node-id=1-944&p=f&viewport=258%2C324%2C0.09&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A944&page-id=1%3A2&embed-host=share",
          title: "Hobbio hi-fidelity prototype",
        },
        {
          type: "external-link",
          heading: "Live product",
          href: "https://sharer-21a0a.web.app/",
          label: "Visit Hobbio at sharer-21a0a.web.app",
        },
      ],
    },
    {
      id: "learning",
      title: "Learnings",
      body: "Beyond the specific design decisions, Hobbio's iterative process taught me a lot about how product development actually works—from validating ideas early, to balancing user feedback with scope, to shipping and learning from a live product.",
      blocks: [
        {
          type: "text-cards",
          title: "Concept Validation Insights",
          subtitle:
            "Hobbio was shaped through a multiple iteration process with rounds of user testing. Each cycle helped us validate concepts, uncover friction, and refine the experience before moving forward.",
          columns: 2,
          cards: [
            {
              title: "Lessons Learned",
              items: [
                "Felt some form input methods were not intuitive.",
                "May take too long to find a specific hobby without a search bar.",
                "Some felt it redundant to have two different types of sign up pages.",
              ],
            },
            {
              title: "New Design Direction",
              items: [
                "Changed forms to have input methods that match expected answers.",
                "2 layer approach: Organize classes by the specific hobby (e.g. by clicking \"rock climbing\", all the respective classes will be shown).",
                "Having where users first start as learners and can then apply to be a teacher.",
              ],
            },
          ],
        },
        {
          type: "subsections",
          variant: "inline",
          items: [
            {
              title: "What I learned",
              items: [
                "Strong research leads to strong foundation — Grounding our direction in concrete findings from surveys, interviews, and market analysis gave the team a shared understanding of user needs early on, which made prioritization clearer and development smoother from ideation through launch.",
                "Full development timeline and process — Over five months, we moved from research and ideation through hi-fidelity prototyping, developer handoff, and repeated rounds of user testing before shipping a live MVP.",
                "Designing for developers — Working closely with our development team taught me to design with implementation constraints in mind, using clear specs and reusable patterns so we could build and iterate faster.",
              ],
            },
          ],
        },
      ],
    },
  ],
};
