// import { CreatePost } from "@/app/_components/create-post";
// import { getServerAuthSession } from "@/server/auth";
// import { api } from "@/trpc/server";
import type { NextPage } from "next";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Plane, MoveRight } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
const voyageItems = [
  {
    year: 2023,
    itemTitle: "I've ended the year with great news, I landed another job!",
    itemDescription: "",
  },
  {
    year: 2024,
    itemTitle: "Damn, I really wished this was supposed to be it.",
    itemDescription:
      "What I learn? Communication and clear expectations with a good project management is the key in this field. It was very difficult to be the sole developer in a very hectic environment like this, but I managed to do things I haven't though it was possible when I started web development two years ago. I am ready for a serious project.",
  },
  {
    year: 2023,
    itemTitle: "First development position in FioresGlobal, here we go!",
    itemDescription:
      "Work there until project has ended, international team, very good experience. Started to learn React and backend for future purposes.",
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
      "Learned Java, Phyton, PHP, JavaScript, Project Management",
  },
  {
    year: 2022,
    itemTitle: "Returned to tech as a database admin",
    itemDescription:
      "Learned basic MVC design patterns, how to work with databases (MySQL), how to manage a product and develop UI",
  },
  {
    year: 1991,
    itemTitle: "Year I was born",
    itemDescription: "this is optional",
  },
  {
    year: 2011,
    itemTitle: "Year I got into university",
    itemDescription: "this also is optional",
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
    itemDescription: "this is optional",
    itemImage: "/svg/strawhat.svg",
  },
  {
    year: 2017,
    itemTitle: "We got our first cat, Luna 🌑",
    itemDescription: "this also is optional",
  },
  {
    year: 2022,
    itemTitle:
      "AI may take up interpretation and translation jobs, maybe I can switch to development, my lifelong dream. Surely AI can't hurt tech right? ",
    itemDescription: "Thanks OpenAI and Google",
  },
  {
    year: 2020,
    itemTitle: "I got married, wohoo ❤️",
    itemDescription: "",
  },
];

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
          I&apos;ve worked on volunteer projects, media agencies and database
          companies to learn tech environment, what to expect from what I do and
          also, how to manage expectations. My longest experience about tech
          lies as a Senior CPU Specialist at Project Leia (which is a pseudo for
          a very big tech company that rhymes with maple).
        </p>
        <p className="text-sm tracking-wider">
          I love building (and occasionally designing) pixel-perfect, beautiful
          interfaces with scalable, fast backends.{" "}
        </p>
      </div>
      <div className="mt-10 flex h-full w-full flex-col sm:mt-0 md:py-0 lg:w-4/6 lg:pl-16">
        <h2 className="flex items-center gap-2 pb-4 text-3xl">
          My Journey <Plane size={32} />
        </h2>
        <Separator className="mb-4" />
        <ScrollArea className="h-full w-full">
          <ul className="flex flex-col gap-20">
            {voyageItems
              .sort((a, b) => b.year - a.year)
              .map((item, index) => {
                return (
                  <li
                    className="flex h-fit min-h-20 w-full items-start"
                    key={index}
                  >
                    <MoveRight className="mr-2" />
                    <div className="mr-4 text-2xl">{item.year}</div>
                    <div className="flex h-full flex-col items-baseline">
                      <h3 className="flex">
                        {item.itemTitle}
                        {item.itemImage && (
                          <Image
                            src={item.itemImage}
                            width={20}
                            height={20}
                            alt={"item image"}
                          />
                        )}
                      </h3>
                      <span className="text-sm text-slate-400">
                        {item.itemDescription}
                      </span>
                    </div>
                  </li>
                );
              })}
          </ul>
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
