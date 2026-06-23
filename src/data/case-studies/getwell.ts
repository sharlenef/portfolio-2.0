import type { CaseStudy } from "./types";

export const getwell: CaseStudy = {
  slug: "getwell",
  title: "GetWell",
  description:
    "Inspiring and cultivating mental health amongst women in tech through creativity.",
  accentColor: "#F5C842",
  cardColor: "#FFF5D6",
  accentTextColor: "#8B6914",
  calloutBg: "#FFF9E6",
  bannerSrc: "/works/getwell/getWell-mockup.png",
  bannerAlt: "Mockup of GetWell",
  overview:
    "GetWell is a web application that aims to provide users with a solution to express themselves in a creative manner. Our team was inspired by a passion for solving issues relating to mental health and ways we can emphasize its importance. Because of this, we decided to create an application that would address the problem statement in a less serious, unorthodox manner. GetWell was built with the hope that it would allow users to alleviate their stress, vent, and share their experiences with others through an artistic medium.",
  meta: [
    { label: "Role", values: ["UX Designer"] },
    { label: "Timeline", values: ["Spring 2022"] },
    {
      label: "Tools",
      values: ["HTML", "CSS", "JavaScript", "React", "Figma", "Netlify"],
    },
    {
      label: "Skills",
      values: ["UIUX Design", "Wireframing", "User Testing", "Prototyping"],
    },
  ],
  sections: [
    {
      id: "problem",
      title: "Problem",
      body: "The main problem we wanted to address was mental health in our users, as it continues to remain a leading worldwide concern. We found that the lockdown guidelines in the pandemic have negatively impacted young adults with existing mental health conditions.\n\nWe also discovered that women working in STEM fields have reported greater levels of stress and anxiety, with higher incidences of depression. This data showed us how women are subject to unique stressors on account of the global pandemic.\n\nFurthermore, after reviewing the current online mental health resources, there are effective group therapy sessions to connect women, but these meetings have privacy issues because of zoom bombers who invade private online meetings.",
      callout:
        "In addition to the gender disparity in tech, the pandemic has detrimentally contributed to the mental health of women in tech.",
    },
    {
      id: "research",
      title: "Research",
      body: "We grounded our design in a user persona that reflects the experiences of women navigating mental health challenges in tech.",
      blocks: [
        {
          type: "subsections",
          variant: "inline",
          items: [
            {
              title: "User Persona",
              body: "To better understand how our product will be implemented in real world solutions, we created Tiffany (she/her), our user persona. She is a 24 year old data scientist working at a major tech company. Since she's pretty young, she's been having a hard time adjusting to corporate life in a foreign country. She's been experiencing imposter syndrome and has been feeling pretty down because of it. She wants to talk to her friends about it but all of her friends live in different time zones.",
            },
          ],
        },
      ],
    },
    {
      id: "ideation",
      title: "Ideation",
      body: "In order to address the problem space, our team went through a series of brainstorming to ideate a website that could solve this problem. We originally wanted to create a platform that would provide women with resources and support for overcoming the gender disparity in tech. However, we decided to take an approach that is unorthodox and different compared to the existing resources. We wanted to make something that would be fun and allow people to express themselves. With this in mind, we came up with the idea of creating a platform that would allow users to vent and share their experiences with others. From our research and experiences, we know that a lot of the younger generations tend to cope with negative emotions through memes and funny content. We wanted to replicate this experience within our application so we decided to head down towards the path of content creation.",
      blocks: [
        {
          type: "subsections",
          variant: "inline",
          items: [
            {
              title: "Requirements",
              body: "Before developing our application, our team came together to discuss and decide which key features are necessary for our solution. There were so many different features we wanted to include, however, we had only 10 weeks to create a \"finished\" product. We had to sacrifice some features, like the resources page, to focus on our main canvas feature.",
            },
          ],
        },
      ],
    },
    {
      id: "solutions",
      title: "Solution",
      body: "We chose to implement our solution as a React app hosted on Netlify, so that it can be enjoyed by anyone who has a computer and a link. With multiple iterations and long hours of bug squashing, we were able to release our product into the world—in the span of 10 weeks, we experienced the ups and downs of software development and shipped a functional project.",
      blocks: [
        {
          type: "screens",
          screens: [
            {
              src: "/works/getwell/GWsoftwarearch.png",
              alt: "Software architecture diagram of GetWell",
              caption: "Software Architecture",
            },
          ],
        },
        {
          type: "subsections",
          variant: "inline",
          items: [
            {
              title: "Low-Fidelity Wireframe",
              body: "With a clear understanding of the features we want, we moved on to create low fidelity wireframes so that our developers can start with a reference in mind. For this, we created different screens for each main feature of our product: Landing, Profile/Gallery, and Canvas. Through this, the entire team was able to ideate and visualize the solutions we had in mind and reach a consensus on how to execute our solution.",
            },
            {
              title: "High-Fidelity Wireframe",
              items: [
                "First Iteration — Moving onto high fidelity wireframes, we needed a clear picture of the design direction of GetWell. After thorough research, we wanted to incorporate a yellow palette to provide users with a brighter vibe. Using an orange-ish yellow as our accent color, we proceeded to create a wireframe that would be a blueprint to our website.",
                "Second Iteration — A bit after we started building our product, our team realized that we had some constraints in time and hands. We aimed high with our product but found that we didn't have the right resources at that time so we created a second iteration of our product that would better fit our resources and improve on our first iteration. In other words, we changed some features into stretch goals and focused on the functionality of our canvas page to provide users with a smoother experience.",
                "Logo — We wanted a clear and concise logo by incorporating the initials of our product name while retaining the whimsical \"doodle\" vibe of our product. We sketched out logo ideas, went through multiple iterations of logo design, and came to a final design.",
              ],
            },
          ],
        },
        {
          type: "external-link",
          heading: "Live product",
          href: "https://starlit-queijadas-0f7413.netlify.app/",
          label: "Visit GetWell at starlit-queijadas-0f7413.netlify.app",
        },
      ],
    },
    {
      id: "learning",
      title: "Learnings",
      body: "Through user testing and the full development cycle, we learned how to build a product that balances ambitious vision with realistic scope—and what it takes to ship something people can actually use.",
      blocks: [
        {
          type: "subsections",
          variant: "inline",
          items: [
            {
              title: "User Testing",
              body: "To get a gauge of how our product would work in the real world, we invited several participants to try out our product. We sat down with them and explained the general gist of our product, giving them several goals to accomplish with GetWell. Through this process, we were able to find a handful of bugs and some points of improvement.",
              items: [
                "Color picker not working — Our app originally was not going to have a color picker; it was meant to change the color of the background. This was mainly brought up by our participants due to the icon being a color picker. To prevent this confusion, we changed our icon to a more indicative icon that represents the background, rather than representing color.",
                "Some shapes not showing up — Our participants realized that changing shapes was a bit difficult and sometimes didn't work. We found that the shapes navbar was not registering users' clicks so we decided to make the hitbox larger and add a hover state and a focused state to help users see which shapes they are on.",
              ],
            },
          ],
        },
        {
          type: "subsections",
          variant: "inline",
          items: [
            {
              title: "Key Takeaways",
              items: [
                "Software development is a long and iterative process where patience, perseverance, communication, and comprehension is key.",
                "Handing off designs doesn't just mean giving it to the developer, but it also means mutually working with developers collaboratively and being with them throughout the entire process.",
                "Research and users' thoughts takes precedence when it comes to design.",
                "Dream big but start small, don't take on more than you think is possible.",
              ],
            },
          ],
        },
      ],
    },
  ],
};
