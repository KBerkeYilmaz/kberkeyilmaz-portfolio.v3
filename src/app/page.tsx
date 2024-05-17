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
interface VoyageItem {
  year: number;
  itemTitle: string;
  itemDescription?: string;
  itemImage?: string;
}

const voyageItems: VoyageItem[] = [
  {
    year: 2023,
    itemTitle: "I've ended the year with great news, I landed another job!",
    itemDescription:
      "I've started to work as a fullstack web developer on MedusaGlobal, a media agency. Met lots of professionals, made contacts with designers, embed software developers and backend cybersecurity developers.  I feel like I started to outgrow my tenure as a 'junior'. ",
  },
  {
    year: 2024,
    itemTitle: "I've founded my own team.",
    itemDescription:
      "I feel like I've gained so much experience in these past two years. Time to put my vision to the test. Ready for new horizons and bigger challenges. We're only got two active members now, but that's a start. ",
  },
  {
    year: 2020,
    itemTitle: "Started to work as a full time interpreter.",
    itemDescription:
      "Translated lots of academic articles, worked with an insulation manufacturer as an interpreter/consultant on foreign sales, started to work as an interpreter for Ithaki Publishing.",
  },
  {
    year: 2023,
    itemTitle: "First development position in FioresGlobal, here we go!",
    itemDescription:
      "International team, very good experience. Started to learn React and backend for future purposes as JQuery and VanillaJS combo felt really old. Worked daily with backend teams, structured the project on Django framework.",
  },
  {
    year: 2023,
    itemTitle:
      "Developed my very first basic PHP backend framework with MVC pattern suitable for e-commerce. ",
    itemDescription:
      "Decoupled architecture with React FE acts as a view component. Deployed backend on shared hosting, learned how to use Vercel for frontend.",
  },
  {
    year: 2022,
    itemTitle:
      "I started taking introduction to CS classes in İzmir University of Economics. ",
    itemDescription:
      "Learned Java, Phyton, PHP, JavaScript, Project Management. Course took 6 months, I really liked PHP and Java. Built algorithms on Python, learned different IDE's.",
  },
  {
    year: 2022,
    itemTitle: "Returned to tech as a database admin",
    itemDescription:
      "Learned basic MVC design patterns, how to work with databases (MySQL), how to manage a product and develop UI",
  },
  {
    year: 2021,
    itemTitle: "This time switched up a bit, I got my first dog, Nami",
    itemDescription: "Okay, this is getting out of hand.",
  },
  {
    year: 1991,
    itemTitle: "Year I was born",
  },
  {
    year: 2011,
    itemTitle: "Year I got into university",
  },
  {
    year: 2019,
    itemTitle: "My second promotion, I've become a Senior CPU specialist",
    itemDescription:
      "Lots of good memories here, learned a lot and grow as a person.",
  },
  {
    year: 2018,
    itemTitle: "My first promotion, switched to mobile from CPU department",
    itemDescription: "",
  },
  {
    year: 2018,
    itemTitle: "I got into tech for a very big company as a specialist.",
    itemDescription: "I wonder if NDA is still valid or not",
  },
  {
    year: 2018,
    itemTitle: `We got our second cat, Luffy`,
    itemImage: "/svg/strawhat.svg",
  },
  {
    year: 2017,
    itemTitle: "We got our first cat, Luna 🌑",
  },
  {
    year: 2022,
    itemTitle:
      "I thought AI may take up interpretation and translation jobs, maybe I can switch to software development, my lifelong dream. Surely AI can't hurt tech right? Started to work on web development with an Udemy Course by Dr. Angela Yu ",
    itemDescription: "Famous last words",
  },
  {
    year: 2020,
    itemTitle: "I got married, wohoo ❤️",
    itemDescription: "",
  },
];

type GroupedByYear = Record<number, VoyageItem[]>;

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
        <h1 className="text-2xl md:text-4xl">Hi, I&apos;m Berke 👋</h1>
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
                            {item.itemTitle}
                            {item.itemImage && (
                              <Image
                                src={item.itemImage}
                                width={20}
                                height={20}
                                alt="item image"
                              />
                            )}
                          </h4>
                          <span className="text-sm tracking-wide text-slate-500">
                            {item.itemDescription}
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
