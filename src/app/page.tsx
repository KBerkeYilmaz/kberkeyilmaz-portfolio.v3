// import { CreatePost } from "@/app/_components/create-post";
// import { getServerAuthSession } from "@/server/auth";
// import { api } from "@/trpc/server";
import type { NextPage } from "next";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Plane, MoveRight } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { type JourneyItem } from "@/lib/types/journeyItem";

const voyageItems: JourneyItem[] = [
  {
    year: 2023,
    title: "I've ended the year with great news, I landed another job!",
    description:
      "I've started to work as a fullstack web developer on MedusaGlobal, a media agency. Met lots of professionals, made contacts with designers, embed software developers and backend cybersecurity developers.  I feel like I started to outgrow my tenure as a 'junior'. ",
  },
  {
    year: 2024,
    title: "I've founded my own team.",
    description:
      "I feel like I've gained so much experience in these past two years. Time to put my vision to the test. Ready for new horizons and bigger challenges. We're only got two active members now, but that's a start. ",
  },
  {
    year: 2020,
    title: "Started to work as a full time interpreter.",
    description:
      "Translated lots of academic articles, worked with an insulation manufacturer as an interpreter/consultant on foreign sales, started to work as an interpreter for Ithaki Publishing.",
  },
  {
    year: 2023,
    title: "First development position in FioresGlobal, here we go!",
    description:
      "International team, very good experience. Started to learn React and backend for future purposes as JQuery and VanillaJS combo felt really old. Worked daily with backend teams, structured the project on Django framework.",
  },
  {
    year: 2023,
    title:
      "Developed my very first basic PHP backend framework with MVC pattern suitable for e-commerce. ",
    description:
      "Decoupled architecture with React FE acts as a view component. Deployed backend on shared hosting, learned how to use Vercel for frontend.",
  },
  {
    year: 2022,
    title:
      "I started taking introduction to CS classes in İzmir University of Economics. ",
    description:
      "Learned Java, Phyton, PHP, JavaScript, Project Management. Course took 6 months, I really liked PHP and Java. Built algorithms on Python, learned different IDE's.",
  },
  {
    year: 2022,
    title: "Returned to tech as a database admin",
    description:
      "Learned basic MVC design patterns, how to work with databases (MySQL), how to manage a product and develop UI",
  },
  {
    year: 2021,
    title: "This time switched up a bit, I got my first dog, Nami",
    description: "Okay, this is getting out of hand.",
  },
  {
    year: 1991,
    title: "Year I was born",
  },
  {
    year: 2011,
    title: "Year I got into university",
  },
  {
    year: 2019,
    title: "My second promotion, I've become a Senior CPU specialist",
    description:
      "Lots of good memories here, learned a lot and grow as a person.",
  },
  {
    year: 2018,
    title: "My first promotion, switched to mobile from CPU department",
    description: "",
  },
  {
    year: 2018,
    title: "I got into tech for a very big company as a specialist.",
    description: "I wonder if NDA is still valid or not",
  },
  {
    year: 2018,
    title: `We got our second cat, Luffy`,
    image: "/svg/strawhat.svg",
  },
  {
    year: 2017,
    title: "We got our first cat, Luna 🌑",
  },
  {
    year: 2022,
    title:
      "I thought AI may take up interpretation and translation jobs, maybe I can switch to software development, my lifelong dream. Surely AI can't hurt tech right? Started to work on web development with an Udemy Course by Dr. Angela Yu ",
    description: "Famous last words",
  },
  {
    year: 2020,
    title: "I got married, wohoo ❤️",
    description: "",
  },
  {
    year: 2022,
    title: "I've started to on responsive web design, CSS, HTML, JS.",
    description:
      "I've built my first portfolio website. Followed the course content, I've learned how to use Git and Github.",
  },
  {
    year: 2022,
    title: "Learned grid and flex",
    description:
      "Flexbox is something else. HTML and CSS were really fun, but Javascript nearly broked me.",
  },
  {
    year: 2022,
    title: "Changed to a new course by Colt Steel",
    description:
      "Understood the Javascript a little more. Course content included the whole MERN stack, but I was still to green, didn't understand much.",
  },
  {
    year: 2023,
    title:
      "Working with an active database company with thousands of daily traffic really helped me.",
    description:
      "Combined with the my new CS knowledge, I've started to understand more and more.",
  },
  {
    year: 2023,
    title: "Learning React changed everything",
    description:
      "I finally understood the concepts like REST, SOAP, API, JSON, AJAX, and of course how to use them. I've started to grasp how to scale, and build a web application.",
  },
  {
    year: 2024,
    title: "New Year new stack, hello T3",
    description:
      "I've decided to update my portfolio as my second attempt was cut short by my new job. I've implemented a new auth to the current T3 stack and learned how to use Drizzle, Supabase and PostgreSQL. Best thing was tRCP tho, made a really big difference running queries and making API calls.",
  },
  {
    year: 2023,
    title: "Next.Js is life, Next.js is love",
    description:
      "While learning React, I've heard about server components, server side rendering and SEO's of course. Naturally, I've stumbled upon Next.js, and it was love at first sight. I've started to learn Next.js and how to use it with React.",
  },
];

type GroupedByYear = Record<number, JourneyItem[]>;

const groupedByYear = voyageItems.reduce<GroupedByYear>((acc, item) => {
  // If the year key does not exist, initialize it with an empty array
  if (!acc[item.year]) {
    acc[item.year] = [];
  }
  // Push the current item into the appropriate year array
  acc[item.year]!.push(item);
  return acc;
}, {} as GroupedByYear); // Type assertion to match GroupedByYear

const Home: NextPage = async () => {
  // const hello = await api.post.hello({ text: "from tRPC" });
  // const session = await getServerAuthSession();

  return (
    <div className="flex h-full animate-fadeIn flex-col gap-20 overflow-scroll sm:gap-8 lg:flex-row lg:gap-0">
      <div className="flex h-full flex-col gap-4 lg:w-2/6">
        <h1 className="text-2xl md:text-4xl font-semibold">Hi, I&apos;m Berke 👋</h1>
        <p className="text-sm tracking-wider">
          I&apos;m a software developer who loves coding, litterature, movies,
          music and gaming.
        </p>

        <p className="text-sm tracking-wider">
          {" "}
          I currently working as a project lead / fullstack developer at a
          project that I&apos;ve founded,
          <Link
            href={"https://www.teamrandom.dev/"}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300 hover:text-blue-600"
          >
            {" "}
            Team Random.
          </Link>
        </p>
        <p className="text-sm tracking-wider">
          {" "}
          I&apos;ve worked on volunteer projects, with media agencies, and at
          database companies to learn about the tech world and what’s expected
          of a software developer. My longest experience was as a Senior CPU
          Specialist at Project Leia major tech company (that rhymes with
          &apos;maple&apos;).
        </p>
        <p className="text-sm tracking-wider">
          I love building (and occasionally designing) pixel-perfect, beautiful
          interfaces with scalable, fast backends.{" "}
        </p>
        <p className="text-sm tracking-wider">
          If interested, feel free to say hi!
        </p>
      </div>
      <div className="mt-10 flex h-full w-full flex-col sm:mt-0 md:py-0 lg:ml-16 lg:w-4/6">
        <h2 className="flex items-center gap-2 pb-4 text-3xl">
          My Journey <Plane size={32} />
        </h2>
        <Separator className="mb-4" />
        <ScrollArea className="h-full w-full">
          <Suspense fallback={<Skeleton />}>
            <ul className="flex flex-col items-start justify-start gap-10">
              {Object.keys(groupedByYear)
                .map(Number) // Convert keys to numbers
                .sort((a, b) => b - a) // Sort years descending
                .map((year) => (
                  <li key={year} className="flex w-full flex-col">
                    <h3 className="mb-4 text-2xl font-semibold">{year}</h3>
                    {groupedByYear[year]!.map((item, index) => (
                      <div
                        className="mb-4 flex h-fit min-h-20 w-full items-start"
                        key={index}
                      >
                        <MoveRight className="mr-2" />
                        <div className="flex h-full w-full flex-col items-baseline">
                          <h4 className="flex">
                            {item.title}
                            {item.image && (
                              <Image
                                src={item.image}
                                width={20}
                                height={20}
                                alt="item image"
                              />
                            )}
                          </h4>
                          <span className="text-sm tracking-wide text-slate-500">
                            {item.description}
                          </span>
                        </div>
                      </div>
                    ))}
                  </li>
                ))}
            </ul>
          </Suspense>
        </ScrollArea>
      </div>
    </div>
  );
};

// async function CrudShowcase() {
//   const session = await getServerAuthSession();
//   if (!session?.user) return null;

//   const latestPost = await api.post.getLatest();

//   return (
//     <div className="w-full max-w-xs">
//       {latestPost ? (
//         <p className="truncate">Your most recent post: {latestPost.name}</p>
//       ) : (
//         <p>You have no posts yet.</p>
//       )}

//       <CreatePost />
//     </div>
//   );
// }
export default Home;
