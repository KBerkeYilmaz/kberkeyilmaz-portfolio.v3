import type { NextPage } from "next";
// import Hello from "@/app/_components/sayhello";
// import RegisterForm from "@/components/forms/RegisterForm";
import { WorkCard } from "@/components/WorkItem";
const works = [
  {
    name: "Health and Wonders",
    description:
      "This is a semi CMS platform with dashboard implementation. Key features are CRUD operations, 4 language, NodeMailer implementation,93 SEO Score. I've used VPS hosting on Hostinger for this project and used a UbuntuLightspeed server with Node.js environment via SSH, it's super fast.",
    // stack: ["React", "Node", "TypeScript"],
    links: {
      github: "https://github.com/KBerkeYilmaz/healthnwonders_dynamic",
      demo: "https://healthandwonders.com/",
    },
    // image: "https://via.placeholder.com/150",
  },
  {
    name: "Team Random CRM",
    description:
      "This is a CRM platform with dashboard implementation. Key features are IMAPflow | Gmail integration, Edgestore Integration, CRUD operations, NodeMailer implementation,100 SEO Score. I've acted as a project lead in this project and handled backend operations like MongoDb integration using Mongoose ORM, Next.js 14 App Router, API routes and UI/UX design",
    // stack: ["React", "Node", "TypeScript"],
    links: {
      github: "https://github.com/KBerkeYilmaz/team_random",
      demo: "https://www.teamrandom.dev/",
    },
    // image: "https://via.placeholder.com/150",
  },
  {
    name: "Portfolio Stack",
    description:
      "This is my latest project, a new portfolio update. I've used T3 stack for this project and I'm really glad I did. I've used PostgreSQL as DB, Drizzle as ORM, and biggest forte of the project is tRCP API routes. ShadCN component library and TailwindCSS for styling. I've used Vercel for deployment.",
    // stack: ["React", "Node", "TypeScript"],
    links: {
      github: "https://github.com/KBerkeYilmaz/kberkeyilmaz-portfolio.v3",
      demo: "https://www.berkeyilmaz.dev/",
    },
    // image: "https://via.placeholder.com/150",
  },
  {
    name: "E-Commerce MVC Backend",
    description:
      "My first initiative at backend, a simple MVC API server. Backend is in Vanilla PHP, hat to learn ins and outs of PHP and MVC architecture. I've used MySQL for DB, and deployed on a shared hosting server. View component is in React, for succesfull API calls and caching meeting with this project needs, I've used Axios and SWC, form validation from React-Form-Fook and React Router as frontend navigation. ",
    // stack: ["React", "Node", "TypeScript"],
    links: {
      github: "https://github.com/KBerkeYilmaz/e-commerce-app-kutalmis",
      demo: "https://react-ecommerce-test-kbyilmaz.vercel.app",
    },
    // image: "https://via.placeholder.com/150",
  },
];

const Works: NextPage = async () => {
  return (
    <div className="flex h-full w-full animate-fadeIn flex-col items-center justify-start">
      <h1 className="mb-4 text-4xl font-semibold">Works</h1>
      <div className="grid grid-cols-1 gap-4 overflow-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {works.map((work, index) => (
          <WorkCard key={index} work={work} />
        ))}
      </div>
    </div>
  );
};

export default Works;
