import { type NextPage } from "next";
import {auth} from "@/server/auth";
import { redirect } from "next/navigation";

const Dashboard: NextPage = async () => {
  const user = await auth();
  if (!user) {
    redirect("/");
    return null;
  }
  return <h1>This is dashboard</h1>;
};

export default Dashboard;
