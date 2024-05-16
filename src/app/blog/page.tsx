import { type NextPage } from "next";
import { auth } from "@/server/auth";

const About: NextPage = async () => {
  const session = await auth();
  console.log(session)
  return <main>
    <h1>Session Info</h1>
    <pre>{JSON.stringify(session, null, 2)}</pre>
  </main>
};

export default About;
