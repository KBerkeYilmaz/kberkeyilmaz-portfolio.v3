import type { NextPage } from "next";
// import Hello from "@/app/_components/sayhello";
// import RegisterForm from "@/components/forms/RegisterForm";
import { WorkCard } from "@/components/WorkItem";
import { IconBrandGithub } from "@tabler/icons-react";


const works = [
  {
    name: "Health and Wonders",
    description:
      "I developed a dedicated dashboard for editing website content in this advertisement-focused application. The platform is designed to connect hospitals, doctors, and appointment services, enhancing visibility and accessibility for healthcare providers. The dashboard supports multiple languages, integrates email notifications via NodeMailer, and achieved a 93 SEO score. I also managed its deployment on a VPS with an optimized Ubuntu Lightspeed server, ensuring reliable performance.",
    links: {
      // github: "https://github.com/KBerkeYilmaz/healthnwonders_dynamic",
      demo: "https://healthandwonders.com/",
    },
  },
  {
    name: "Team Random CRM",
    description:
      "As project lead, I oversaw the creation of a comprehensive CRM platform designed to streamline business workflows. I coordinated key integrations, including Gmail via IMAPflow and robust MongoDB operations using Mongoose, while also guiding the UI/UX design process. This resulted in a tool with a 100 SEO score, enhancing client engagement.",
    links: {
      github: "https://github.com/KBerkeYilmaz/team_random",
      demo: "https://www.teamrandom.dev/",
    },
  },
  {
    name: "Portfolio Stack",
    description:
      "This personal portfolio was developed using the T3 stack, focusing on efficient data handling and a refined user interface. Utilizing tRPC for smooth API interactions and PostgreSQL for robust data management, the project is deployed on Vercel to ensure high performance and reliability.",
    links: {
      github: "https://github.com/KBerkeYilmaz/kberkeyilmaz-portfolio.v3",
      demo: "https://www.berkeyilmaz.dev/",
    },
  },
  {
    name: "E-Commerce MVC Backend",
    description:
      "I developed an MVC-based API server using PHP, integrating a MySQL database and a React-based frontend. By implementing best practices in caching, API calls, and form validation, I established a scalable backend solution that effectively supports e-commerce operations.",
    links: {
      github: "https://github.com/KBerkeYilmaz/e-commerce-app-kutalmis",
      demo: "https://react-ecommerce-test-kbyilmaz.vercel.app",
    },
  },
];


const Works: NextPage = async () => {
  return (
    <div className="flex h-full w-full animate-fadeIn flex-col items-center justify-start">
      <h1 className="mb-4 text-4xl font-semibold">Works</h1>
      <div className="grid grid-cols-1 gap-4 overflow-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 py-4">
        {works.map((work, index) => (
          <WorkCard key={`${work.name}-${index}`} work={work} />
        ))}
      </div>
    </div>
  );
};

export default Works;
