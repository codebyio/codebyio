import WEBSITE_DEVELOPMENT from "../../../public/assets/images/WEBSITE_DEVELOPMENT.png";
import WEBSITE_MOCKUP from "../../../public/assets/images/WEBSITE_MOCKUP.png";
import TECH_CONSULTANCY from "../../../public/assets/images/TECH_CONSULTANCY.png";
import ONESTOP_SOLUTION from "../../../public/assets/images/ONESTOP_SOLUTION.png";

export const services = [
  {
    id: "website-development",
    name: "Website Development",
    metaDescription:
      "Build fast, scalable, and fully custom websites. Our development process is structured, goal-focused, and optimized for long-term growth.",
    image: WEBSITE_DEVELOPMENT,
    heroBannerTitle: `
      Templates don’t ask *questions*. We start by *listening*
    `,
    heroBannerDescription: `
      A great website begins with your story. Built through clarity, vision and collaboration that lasts.
    `,
    description: `
      We build websites from the ground up. Crafted to align with your brand, your goals, and the way you work.
      From strategy to launch, we work with you end-to-end to create sites that are structured, optimized, and ready to grow — whether it’s a company profile, a portfolio, or a fully custom e-commerce platform.
    `,
    keyTitle: "What We Code",
    keyDescription:
      "What we develop depends on your goals. Some websites are built to introduce, others to sell, and others to support internal work.",
    keyPoints: [
      {
        title: "Company Profile Website",
        description:
          "Introduce your business with clarity and structure that reflects who you are.",
      },
      {
        title: "Portfolio and Showcases",
        description:
          "Highlight your work in a way that’s easy to navigate and built to represent your strengths.",
      },
      {
        title: "E-commerce Stores",
        description:
          "Sell products through a fully functioning website with real-time transactions and a storefront that fits your flow.",
      },
      {
        title: "Campaign or Landing Pages",
        description:
          "Focus your message with pages built to support launches, lead generation, or other short-term objectives.",
      },
      {
        title: "Internal Tools or Dashboard",
        description:
          "Custom ERP or dashboard systems designed to support your team’s workflow and daily operations.",
      },
      {
        title: "Need something more specific?",
        description:
          "We’re happy to hear what you have in mind. Start the conversation at {{emailLink}} or reach out through our {{contactPageLink}}.",
        links: [
          {
            key: "emailLink",
            text: "hi.codebyio@gmail.com",
            href: "mailto:hi.codebyio@gmail.com",
          },
          {
            key: "contactPageLink",
            text: "contact page",
            href: "/contact-us",
          },
        ],
      },
    ],
    journey: [
      {
        title: "Reaching Out",
        description: `
          Most partnerships begin with a simple question: “Can you help us build a website?”
          The short answer is yes. But before discussing features or timelines, we focus on understanding what your website is meant to achieve.
        `,
      },
      {
        title: "Consultation",
        description: `
          This is a free session designed to uncover your goals, challenges, and expectations.
          By listening first, we provide early input that brings clarity before anything moves forward.
        `,
      },
      {
        title: "Proposal and Alignment",
        description: `
          After the consultation, we put together a Website Development proposal tailored to your goals. It outlines your business objectives, project scope, technical needs, timeline, and estimated cost.
          Once everything is aligned and the contract is signed, the project is ready to begin.
        `,
      },
      {
        title: "Getting Started Together",
        description: `
          Before development begins, we host a structured walkthrough to align expectations.
          This includes introducing the team, reviewing timelines, and confirming how everything will move forward.
        `,
      },
      {
        title: "Mockup and Review",
        description: `
          A visual mockup is created to show how your website will look, flow, and function. This stage helps you evaluate structure and clarity, refine what’s needed, and ensure the site matches your vision.
        `,
      },
      {
        title: "Website Development",
        description: `
          With the mockup finalized, the Website Development starts based on the approved design and plan. Everything is custom-built with clean-code and structured logic to match your goals and user experience.
        `,
      },
      {
        title: "UAT (User Acceptance Testing)",
        description: `
          When Website Development is complete, the website will be handed over for testing.
          You can explore the live version, identify any adjustments, and confirm that all features work smoothly before launch.
        `,
      },
      {
        title: "Handover",
        description: `
          The final website is delivered with full access, setup assistance, and optional deployment support. Domain connection, configuration, or handover documentation can also be included based on your needs.
        `,
      },
      {
        title: "Aftercare Support",
        description: `
          After your website goes live, we stay available for light support and final adjustments. If there’s anything else you’d like to improve or explore, we’re happy to discuss next titles with you.
        `,
      },
    ],
    faqTitle: "Web Development – Frequently Asked Question (FAQ)",
    faqList: [
      {
        question: "What kind of websites do you build?",
        answer:
          "We build custom-coded websites made to fit your goals and how your team works. That includes, company profiles, landing pages, e-commerce stores, internal dashboard, portfolio site, or something completely unique.",
      },
      {
        question:
          "What makes your Website Development service differ from using template or other web builder?",
        answer:
          "Because we code everything from scratch, you're not limited by rigid layouts or dependent on third-party plugins. You get a faster, cleaner site and the freedom to evolve it as your business grows.",
      },
      {
        question: "What if we already have a website? Can we rebuild it with you?",
        answer:
          "Absolutely. If your current website is slowing you down or no longer reflects your business, we can rebuild it with better structure, speed, and performance — while keeping the parts that still support your goals.",
      },
      {
        question: "What if we don’t have a website design yet?",
        answer: `
          No worries, we got you! If you don’t have any design yet, we recommend starting with a mockup. Web mockup shows how your website will flow, feel and function before we write a single line of code. That means, clearer direction and fewer revisions later. {{webMockupLink}}
          `,
        links: [
          {
            key: "webMockupLink",
            text: "Explore our Website Mockup Service",
            href: "/services/website-mockup",
          },
        ],
      },
      {
        question: "How much does a custom website cost with CodebyIO?",
        answer: `
          We don’t believe in charging for things you don’t need, that’s why we don’t use flat pricing. Every website we build starts with a clear understanding of your goals, so that what you pay matches what you actually need.
          Not sure where to start? That’s exactly what free consultation is for.
        `,
      },
    ],
  },
  {
    id: "website-mockup",
    name: "Website Mockup",
    metaDescription:
      "Visualize your website before development begins. Our mockups show layout, structure, and user flow to support better decisions.",
    image: WEBSITE_MOCKUP,
    heroBannerTitle: `
      *See* it before you *build* it
    `,
    heroBannerDescription: `
      Our mockup service helps you visualize your idea, so you can move forward with confidence.
    `,
    description: `
      Every website starts with a vision. Mockups help you see it clearly before anything is built.
      With a structured approach and a sharp eye for flow, we design mockups that translate your ideas into a working visual — ready to test, refine, and build on.
      This helps you make confident decisions, reduce unnecessary revisions, and move forward with clarity from day one.
    `,
    keyTitle: "What We Map in Mockups",
    keyDescription:
      "We define what each page needs to communicate, how users move through it, and how visual elements support decisions along the way.",
    keyGridCount: 3,
    keyPoints: [
      {
        title: "User Flow & Page Order",
        description: "What comes first, where people go next, and how the navigation works.",
      },
      {
        title: "Section & Content Layouts",
        description: "How messages are grouped, presented, and supported visually.",
      },
      {
        title: "Call to Action & Conversion Path",
        description: "How actions are positioned, and how we make them easy to notice and follow.",
      },
      {
        title: "Responsiveness",
        description: "How the layout adjusts across devices or adapts to different use cases.",
      },
    ],
    journey: [
      {
        title: "Reaching Out",
        description: `
          A Website Mockup lets you explore the structure and look of your future website—before starting full development.
          If you're still exploring your direction, this is the right place to start.
        `,
      },
      {
        title: "Consultation",
        description: `
          Our initial consultation is always free.
          In this step, we listen closely to understand your business goals, your audience, and the key messages your website needs to deliver.
          Through focused questions and open discussion during the consultation, we help shape the direction before anything gets designed.
        `,
      },
      {
        title: "Design Research and Direction",
        description: `
          Using the input from our consultation, we conduct design research to shape a direction that fits your project. This includes competitor analysis, layout flow exploration, and studying what works best for your audience and business goals.
        `,
      },
      {
        title: "Proposal and Alignment",
        description: `
          With the direction already mapped out, we prepare a Website Mockup design proposal tailored to your goals. It includes the project scope, timeline, deliverables, and estimated cost.
          After your approval and contract signing, our team will begin to work on your Website Mockup.
        `,
      },
      {
        title: "Kick-off",
        description: `
          Before design work begins, we host a short kickoff session.
          You will meet your Project Manager, go through the timeline, and align on how we will collaborate throughout the project.
          This step ensures everything moves forward with clarity and shared expectations.
        `,
      },
      {
        title: "Website Mockup Development",
        description: `
          The mockup process begins based on the direction, structure, and goals aligned in the earlier steps. Each page is designed to reflect your business goals, speak to your audience, and guide users through a clear flow.
        `,
      },
      {
        title: "Project Delivery",
        description: `
          After the final review, we deliver your mockup in a structured and developer-ready format.
          You will receive clean layouts, visual references, and supporting documentation that makes the next step easy to follow. Whether you continue building with us or someone else, the handoff will be clear and smooth.
        `,
      },
      {
        title: "Aftercare Support",
        description: `
          Delivery is not the end of the journey.
          We stay within reach for light revisions, added sections, or support as you plan your next steps.
        `,
      },
    ],
    faqTitle: "Web Mockup – Frequently Asked Question (FAQ)",
    faqList: [
      {
        question: "Why would I need a website mockup?",
        answer:
          "Mockups help you see how your website will look, flow, and feel — before development even begins. It’s a strategic title that brings clarity to structure and UX, while reducing the risk of costly revisions later.",
      },
      {
        question:
          "Do I have to continue the website development with CodebyIO if I start a mockup with you?",
        answer:
          "Not at all. Our mockup service stands on its own. You’re free to take the final design and build it elsewhere. But if you decide to build with us too, we offer more efficient pricing when you bundle both services.",
      },
      {
        question: "Is the mockup final, or can I make a revision?",
        answer:
          "Revisions are part of the process. We always make space for feedback and adjustments. That way, the final mockup reflects what you actually want, not just what you asked for on day one.",
      },
      {
        question: "Can this mockup be used directly by developers?",
        answer:
          "Yes. Our mockups are made to be developer-ready; structured, organized, and built with the final build in mind. You can pass them to any developer, and they’ll know exactly what to build.",
      },
    ],
  },
  {
    id: "tech-consultancy",
    name: "Tech Consultancy",
    metaDescription:
      "Plan smarter with the right tech stack and structure. CodebyIO helps align systems, tools, and team roles to support digital growth.",
    image: TECH_CONSULTANCY,
    heroBannerTitle: `
      Build with a clear *plan*. Move with the *right* decision
    `,
    heroBannerDescription: `
      Our consultancy helps you shape ideas into strategies, and turn early questions into structured direction.
    `,
    description: `
      Strong digital systems are built with the right people, process, and structure.
      Our tech consultancy helps you tackle website issues, define technical standards, and assemble a curated dev team that fits your needs.
      From structure to sustainability, we help you build a system that runs smoothly, scales confidently, and stays reliable through every transition.
    `,
    keyTitle: "What We Bring to the Table",
    keyDescription:
      "We step in at the thinking stage, helping you plan with clarity before anything gets built.",
    keyGridCount: 3,
    keyPoints: [
      {
        title: "Technical Architecture",
        description:
          "We help map the foundation of your website or system. This includes how the parts connect, how they scale, and how they stay maintainable over time.",
      },
      {
        title: "Recommended stack and workflow",
        description:
          "We guide your tech choices based on what fits your team and project. Every recommendation is made to support clarity and reduce unnecessary complexity.",
      },
      {
        title: "Team structure and execution support",
        description:
          "Whether you build in-house or work with us, we help define roles and guide hiring based on what your system requires.",
      },
      {
        title: "Need something more specific?",
        description:
          "You can reach out to us at {{emailLink}}. We’d love to hear what you’re planning and help make it clearer.",
        links: [
          {
            key: "emailLink",
            text: "hi.codebyio@gmail.com",
            href: "mailto:hi.codebyio@gmail.com",
          },
        ],
      },
    ],
    journey: [
      {
        title: "Reaching Out",
        description: `
          Planning a system upgrade or unsure which tools your team should use?
          If you are facing blockers, unclear workflows, or upcoming product launches, this is the time to consult.
          A quick message is all it takes to start uncovering the right technical direction.
        `,
      },
      {
        title: "Consultation",
        description: `
          Our free consultation helps uncover where your technical strategy may need clarity.
          We ask key questions to understand your current system, infrastructure, and business priorities. 
          This session lays the foundation for strategic planning and system improvement.
        `,
      },
      {
        title: "Technical Assessment",
        description: `
          After learning your goals, we assess the technical landscape more deeply.
          This includes reviewing documentation, checking the system architecture, and identifying gaps in your build process or team roles.
          The result is a technical overview that’s clear, accurate, and useful for planning next steps.
        `,
      },
      {
        title: "Proposal and Direction",
        description: `
          We then prepare a tailored Tech Consultancy proposal. It includes a detailed scope, timeline, deliverables, and suggested focus areas.
          Once approved and signed, we begin with aligned expectations and a structured direction.
        `,
      },
      {
        title: "Active Support",
        description: `
          This is where the Tech Consultancy service moves into execution.
          We help align your system’s architecture, clarify technical roles, and support your team or vendor through structured guidance.
          When needed, we also assist in shaping the right tech team to match your project goals.
        `,
      },
      {
        title: "Handoff",
        description: `
          At the end of our engagement, we deliver a full Tech Consultancy handover package.
          This can include updated documentation, diagrams, or roadmap instructions that your team or next vendor can follow easily.
          Everything is structured for a smooth transition.
        `,
      },
      {
        title: "Aftercare Support",
        description: `
          Our Tech Consultancy aftercare support does not stop at handoff.
          We remain available for follow-up questions, light updates, or deeper involvement if your system evolves or new needs arise.
        `,
      },
    ],
    faqTitle: "Tech Consultancy – Frequently Asked Question (FAQ)",
    faqList: [
      {
        question: "What kind of things can I consult with CodebyIO?",
        answer:
          "You can consult us on anything related to how your website or system should be planned, structured, or handled. That includes debugging problems, reviewing your existing setup, choosing the right tech stack, or even preparing your internal tech team.",
      },
      {
        question: "I don’t have a tech team yet. Is this still for me?",
        answer:
          "Yes. This service is made for early-stage teams. If you’re a founder or lead figuring out your first product, we’ll help you shape the system and team from scratch, so you don’t overbuild and can hire the right developers from the start.",
      },
      {
        question: "What will I get after the consultation?",
        answer:
          "A clear output tailored to your case. That could be a system map, a team structure plan, a tech stack recommendation, or a project road map – depending on what you need. Interviewing candidates for your tech team? We’re happy to assist to make sure each candidate fits your system and standard.",
      },
    ],
  },
  {
    id: "onestop-solution",
    name: "One-Stop Solution",
    metaDescription:
      "Fix bugs, add features, or improve your website without starting over. CodebyIO offers focused updates that keep your site running smoothly.",
    image: ONESTOP_SOLUTION,
    heroBannerTitle: `
      Think of it like a *pit stop*
    `,
    heroBannerDescription: `
      A quick, focused support to keep your site running smoothly.
    `,
    description: `
      When you only need one thing done right, we handle it with precision.
      Our one-stop solution covers focused updates. Such as, fixing bugs, adding features, improving pages, or integrating third-party tools.
      It’s expert support without a full rebuild, so your site stays fast, functional, and moving forward.
    `,
    keyTitle: "How the Pit Stop Works",
    keyDescription:
      "We treat this service like a pit stop. It’s quick, focused, and meant to get your site back in shape without slowing you down.",
    keyPoints: [
      {
        title: "Fixes and Improvements",
        description:
          "We fix bugs, resolve functional issues, and improve layout or speed to keep your site running smoothly.",
      },
      {
        title: "Updating or Adding Features",
        description:
          "Need to update or add something new? We build small components that fit right into your system.",
      },
      {
        title: "Third-party Integration",
        description:
          "We help connect tools like payment systems, analytics, or booking platforms into your existing site.",
      },
    ],
    journey: [
      {
        title: "Reaching Out",
        description: `
          Most partnerships begin with a simple question: “Can you help us build a website?”
          The short answer is yes. But before discussing features or timelines, we focus on understanding what your website is meant to achieve.
        `,
      },
      {
        title: "Consultation",
        description: `
          This is a free session designed to uncover your goals, challenges, and expectations.
          By listening first, we provide early input that brings clarity before anything moves forward.
        `,
      },
      {
        title: "Proposal and Alignment",
        description: `
          After the consultation, we put together a Website Development proposal tailored to your goals. It outlines your business objectives, project scope, technical needs, timeline, and estimated cost.
          Once everything is aligned and the contract is signed, the project is ready to begin.
        `,
      },
      {
        title: "Getting Started Together",
        description: `
          Before development begins, we host a structured walkthrough to align expectations.
          This includes introducing the team, reviewing timelines, and confirming how everything will move forward.
        `,
      },
      {
        title: "Mockup and Review",
        description: `
          A visual mockup is created to show how your website will look, flow, and function. This stage helps you evaluate structure and clarity, refine what’s needed, and ensure the site matches your vision.
        `,
      },
      {
        title: "Website Development",
        description: `
          With the mockup finalized, the Website Development starts based on the approved design and plan. Everything is custom-built with clean-code and structured logic to match your goals and user experience.
        `,
      },
      {
        title: "UAT (User Acceptance Testing)",
        description: `
          When Website Development is complete, the website will be handed over for testing.
          You can explore the live version, identify any adjustments, and confirm that all features work smoothly before launch.
        `,
      },
      {
        title: "Handover",
        description: `
          The final website is delivered with full access, setup assistance, and optional deployment support. Domain connection, configuration, or handover documentation can also be included based on your needs.
        `,
      },
      {
        title: "Aftercare Support",
        description: `
          After your website goes live, we stay available for light support and final adjustments. If there’s anything else you’d like to improve or explore, we’re happy to discuss next titles with you.
        `,
      },
    ],
    faqTitle: "One-Stop Solution – Frequently Asked Question (FAQ)",
    faqList: [
      {
        question: "Is this service only for fixing bugs?",
        answer:
          "One-Stop Solution service is built for focused updates. We fix bugs, add features and improve any sections that need work; without touching the rest.",
      },
      {
        question: "My site wasn’t built by CodebyIO, can you still help?",
        answer:
          "Yes. We’ll review the code first, then get to work with a solution that fits your system.",
      },
      {
        question: "How is this different from full rebuild?",
        answer:
          "Rebuilding starts from scratch. Think of it as a pit stop. Our One-Stop Solution service fixes what’s needed and leave the rest untouched.",
      },
      {
        question: "My site feels slow or something’s breaking. Can you help?",
        answer:
          "Yes. Just tell us what’s happening. We’ll identify the issue and recommend the cleanest way to fix it.",
      },
    ],
  },
];
