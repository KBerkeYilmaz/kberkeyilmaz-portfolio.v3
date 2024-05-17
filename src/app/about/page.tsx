import type { NextPage } from "next";
import { CreatePost } from "../_components/create-post";
const dynamic = "force-dynamic";

const About: NextPage = async () => {
  // const { data, error, isLoading } = api.test.hello.useQuery({ text: "World" });

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="w-full h-full flex justify-center items-center">
      <CreatePost />
    </div>
  );
};

export default About;
