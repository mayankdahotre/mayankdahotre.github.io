import {
  blogPosts,
  experience,
  projects,
  publications,
  techStack,
} from "./portfolioData";

const TECH_GROUPS = [
  {
    heading: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "C++"],
  },
  {
    heading: "Frontend & Backend",
    items: ["React", "Node.js", "FastAPI"],
  },
  {
    heading: "Data & ML",
    items: ["MongoDB", "PostgreSQL", "PyTorch", "TensorFlow"],
  },
  {
    heading: "DevOps & Tools",
    items: ["Docker", "AWS", "Git"],
  },
];

function techColumns() {
  const known = new Set(TECH_GROUPS.flatMap((g) => g.items));
  const other = techStack.filter((item) => !known.has(item));

  const columns = TECH_GROUPS.map((group) => ({
    heading: group.heading,
    links: group.items
      .filter((item) => techStack.includes(item))
      .map((item) => ({
        label: item,
        sectionKey: "skills",
        anchor: "tech-stack",
      })),
  }));

  if (other.length) {
    columns.push({
      heading: "More",
      links: other.map((item) => ({
        label: item,
        sectionKey: "skills",
        anchor: "tech-stack",
      })),
    });
  }

  return columns.filter((col) => col.links.length > 0);
}

export const NAV_ITEMS = [
  {
    key: "about",
    label: "About",
    sectionKey: "about",
  },
  {
    key: "skills",
    label: "Skills",
    sectionKey: "skills",
    megaMenu: {
      columns: [
        {
          heading: "Explore Skills",
          featured: true,
          links: [
            { label: "Tech Stack", sectionKey: "skills", anchor: "tech-stack" },
            { label: "All Skills", sectionKey: "skills" },
          ],
        },
        ...techColumns(),
      ],
    },
  },
  {
    key: "research",
    label: "Research",
    sectionKey: "research",
    megaMenu: {
      columns: [
        {
          heading: "Publications",
          featured: true,
          links: publications.map((pub) => ({
            label: pub.title,
            sectionKey: "research",
            description: pub.venue,
          })),
        },
        {
          heading: "More from Research",
          links: [
            { label: "View all publications", sectionKey: "research" },
          ],
        },
      ],
    },
  },
  {
    key: "experience",
    label: "Exp",
    sectionKey: "experience",
    megaMenu: {
      columns: [
        {
          heading: "Experience",
          featured: true,
          links: experience.map((job) => ({
            label: job.role,
            sectionKey: "experience",
            description: `${job.company} · ${job.period}`,
          })),
        },
        {
          heading: "Career",
          links: [{ label: "View full timeline", sectionKey: "experience" }],
        },
      ],
    },
  },
  {
    key: "blog",
    label: "Blog",
    sectionKey: "blog",
    megaMenu: {
      columns: [
        {
          heading: "Recent Posts",
          featured: true,
          links: blogPosts.map((post) => ({
            label: post.title,
            sectionKey: "blog",
            description: post.date,
            href: post.link,
          })),
        },
        {
          heading: "More",
          links: [{ label: "View all posts", sectionKey: "blog" }],
        },
      ],
    },
  },
  {
    key: "resume",
    label: "Resume",
    sectionKey: "resume",
  },
  {
    key: "projects",
    label: "Projects",
    sectionKey: "projects",
    megaMenu: {
      columns: [
        {
          heading: "Explore Projects",
          featured: true,
          links: projects.map((project) => ({
            label: project.title,
            sectionKey: "projects",
            description: project.tags.join(", "),
            href: project.link,
          })),
        },
        {
          heading: "Portfolio",
          links: [{ label: "Browse project slider", sectionKey: "projects" }],
        },
      ],
    },
  },
  {
    key: "contact",
    label: "Contact",
    sectionKey: "contact",
  },
];
