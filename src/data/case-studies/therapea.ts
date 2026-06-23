import type { CaseStudy } from "./types";

export const therapea: CaseStudy = {
  slug: "therapea",
  title: "Therapea",
  description: "An all-in-one app to help people with eating disorders.",
  accentColor: "#4B2162",
  cardColor: "#E6D7EB",
  accentTextColor: "#4B2162",
  calloutBg: "#F3EDF7",
  bannerSrc: "/works/therapea/screen-phone.png",
  bannerAlt: "Mockup of Therapea",
  overview:
    "Therapea is an all-in-one platform that has the features of providing professional, community, and educational support. Through these three main features, Therapea aims to provide our users with different aspects of support conveniently on their smartphones.",
  meta: [
    { label: "Role", values: ["UX Designer", "UX Researcher"] },
    { label: "Timeline", values: ["Winter 2021"] },
    { label: "Tools", values: ["Figma"] },
    {
      label: "Skills",
      values: ["UIUX Design", "Wireframing", "User Testing", "Prototyping"],
    },
  ],
  sections: [
    {
      id: "problem",
      title: "Problem",
      body: "During the COVID-19 pandemic, many people with mental health issues, such as eating disorders, have experienced worsening symptoms. Having holistic access to resources in one platform, such as treatment options, education and coping resources, and a support system, is instrumental in helping people with eating disorders during the pandemic.",
      callout:
        "How might we simplify providing access to treatment and coping resources for people with eating disorders during the pandemic?",
    },
    {
      id: "research",
      title: "Research",
      body: "Our team conducted a series of literature reviews to strengthen our background on eating disorders and how the pandemic lockdown has affected those struggling with them.",
      blocks: [
        {
          type: "quote",
          text: "According to a July survey by the International Journal of Eating Disorders, 62% of people in the US with eating disorders like anorexia experienced a worsening of symptoms as the pandemic hit.",
        },
        {
          type: "screens",
          screens: [
            {
              src: "/chain.png",
              alt: "Chain of causality: how lockdown leads to eating disorders",
            },
            {
              src: "/system.png",
              alt: "Social Technical System: system explaining the structure, tasks, people, and physical system involved",
            },
          ],
        },
      ],
    },
    {
      id: "ideation",
      title: "Ideation",
      body: "Our team came up with sketches of possible ideas on how to help people with eating disorders. We had ideas of making a zine, a newsletter, or a physical product. In the end, we decided to roll with a mobile phone application since that would be the easiest way for us to reach our main users—if help can be right on their phones, it would make for a convenient and socially distanced way of getting help.",
      blocks: [
        {
          type: "screens",
          screens: [
            {
              src: "/therapea_brainstorm.png",
              alt: "Sketches of possible ideas for solving problem space",
              caption: "Brainstorm sketches",
            },
          ],
        },
        {
          type: "text-cards",
          title: "Design Principles",
          subtitle:
            "To guide our design decisions, we committed to three core principles—professional support, community, and education—and carried them through every stage of the product.",
          cards: [
            {
              title: "Professional Support",
              items: [
                "Users of our app can pick which therapist they want and sign up for virtual sessions.",
                "Through the video function, they can meet with their therapists without having to leave their houses.",
              ],
            },
            {
              title: "Community",
              items: [
                "We plan to incorporate a chat system where users can talk to others who have also experienced eating disorders.",
                "A video function allows users to have meals with one another virtually.",
              ],
            },
            {
              title: "Education",
              items: [
                "Users will have access to a forum board to ask and answer questions anonymously.",
                "Articles and videos posted are crafted by professionals themselves.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "testing",
      title: "Testing",
      body: "Our team went through a series of usability testing and research as we built our prototype. With some research and testing, we found multiple areas of improvement as well as some suggestions from our test subjects.",
      blocks: [
        {
          type: "text-cards",
          columns: 2,
          cards: [
            {
              title: "Findings",
              items: [
                "More formulated survey — Users said the survey was a bit overwhelming and would benefit from having a dropdown menu with answers.",
                "Better visibility — While using our prototype, users said they didn't realize some parts were interactive.",
                "Safety issues — Some concerns arose regarding the safety of our users and their ability to control who they want to be friends with.",
              ],
            },
            {
              title: "Improvements",
              items: [
                "Adding options for survey — Introduced dropdown menus and clearer answer formats to reduce survey fatigue.",
                "Color contrast and emphasis — Improved affordance so interactive elements are easier to identify.",
                "Report and block options on friend profiles — Added safety controls so users can manage their community interactions.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "solutions",
      title: "Solution",
      body: "We first started with a low fidelity prototype to visualize the UI and get an idea of what we want for the concept. In response to our research and what our users had said, we aimed for an all-in-one app that has better affordance and understanding of our users' needs. In our high fidelity prototype, we incorporated five main interfaces: onboarding (login/signup, introduction, and survey), appointment booking, education resource center, friends + chat, and a main dashboard.",
      blocks: [
        {
          type: "subsections",
          variant: "inline",
          items: [
            {
              title: "Low-Fidelity Prototype",
              body: "We first started with a low fidelity prototype to visualize the UI and get an idea of what we want for the concept.",
            },
          ],
        },
        {
          type: "screens",
          columns: 3,
          screens: [
            {
              src: "/lf-add.png",
              alt: "Low fidelity image of adding friends interface",
            },
            {
              src: "/lf-book.png",
              alt: "Low fidelity image of booking appointment interface",
            },
            {
              src: "/lf-education.png",
              alt: "Low fidelity image of education/explore interface",
            },
            {
              src: "/lf-survey.png",
              alt: "Low fidelity image of survey interface",
            },
            {
              src: "/lf-chat.png",
              alt: "Low fidelity image of chat interface",
            },
            {
              src: "/lf-schedule.png",
              alt: "Low fidelity image of schedule interface",
            },
          ],
        },
        {
          type: "figma-embed",
          heading: "Hi-fidelity prototype",
          src: "https://embed.figma.com/proto/q5ltVPHhpr5oLJr452NtOf/TheraPea?page-id=0%3A1&node-id=2%3A26&starting-point-node-id=2%3A26&embed-host=share",
          title: "Therapea hi-fidelity prototype",
        },
      ],
    },
    {
      id: "learning",
      title: "Learnings",
      body: "Therapea was my first full prototype experience—from problem framing through usability testing—and it taught me how design, research, and collaboration come together in product development.",
      blocks: [
        {
          type: "subsections",
          variant: "inline",
          items: [
            {
              title: "Key Takeaways",
              items: [
                "My first ever prototype! It was really fun being able to build a solution through design.",
                "Design is an iterative process; it takes time and patience.",
                "Interview and user test with not only your direct stakeholders, but also indirect stakeholders to gain a deeper understanding of the problem space and how your product affects them.",
                "When collaborating with other designers, make sure everyone's thoughts are taken into consideration and find a way to reach a consensus or make compromises.",
              ],
            },
          ],
        },
      ],
    },
  ],
};
