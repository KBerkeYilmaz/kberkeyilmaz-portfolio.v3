// import { CreatePost } from "@/app/_components/create-post";
// import { getServerAuthSession } from "@/server/auth";
// import { api } from "@/trpc/server";
import type { NextPage } from "next";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Plane, MoveRight } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const voyageItems = [
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
    year: 2021,
    itemTitle: "Year I got married",
    itemDescription: "this is optional",
  },
  {
    year: 1992,
    itemTitle: "Year I was born",
    itemDescription: "this is optional",
  },
  {
    year: 2013,
    itemTitle: "Year I got into university",
    itemDescription: "this also is optional",
  },
  {
    year: 2023,
    itemTitle: "Year I got married",
    itemDescription: "this is optional",
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
    year: 2021,
    itemTitle: "Year I got married",
    itemDescription: "this is optional",
  },
  {
    year: 1992,
    itemTitle: "Year I was born",
    itemDescription: "this is optional",
  },
  {
    year: 2013,
    itemTitle: "Year I got into university",
    itemDescription: "this also is optional",
  },
  {
    year: 2023,
    itemTitle: "Year I got married",
    itemDescription: "this is optional",
  },
];

const Home: NextPage = async () => {
  // const hello = await api.post.hello({ text: "from tRPC" });
  // const session = await getServerAuthSession();

  return (
    <div className="flex h-full animate-fadeIn flex-col gap-20 overflow-scroll md:flex-row md:gap-0">
      <div className="flex h-full flex-col gap-4 lg:w-2/5">
        <h1 className="text-4xl">Hi, I&apos;m Berke. 🤘</h1>
        <p>
          I&apos;m a software developer who loves coding, litterature, movies,
          music and gaming.
        </p>

        <p>
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
        <p>
          I&apos;ve worked on volunteer projects, media agencies and database
          companies to learn tech environment, what to expect from what I do and
          also, how to manage expectations. My longest experience about tech
          lies as a Senior CPU Specialist at Project Leia (which is a pseudo for
          a very big tech company that rhymes with mapple).
        </p>
        <p>
          I love building (and occasionally designing) pixel-perfect, beautiful
          interfaces with scalable, fast backends.{" "}
        </p>
      </div>
      <div className="flex h-full w-full flex-col py-8 md:w-3/5 md:px-16 md:py-0">
        <h2 className="flex items-center gap-2 pb-4 text-3xl">
          My Voyage <Plane size={32} />
        </h2>
        <Separator className="mb-4" />
        <ScrollArea className="h-full w-full">
          <ul>
            {voyageItems
              .sort((a, b) => b.year - a.year)
              .map((item, index) => {
                return (
                  <li
                    className="mb-4 flex h-20 w-full items-center"
                    key={index}
                  >
                    <MoveRight className="mr-2" />
                    <div className="mr-4 text-2xl">{item.year}</div>
                    <div className="flex flex-col">
                      <div>{item.itemTitle}</div>
                      <span className="text-slate-400">
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
