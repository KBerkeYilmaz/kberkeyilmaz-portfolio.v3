import type { NextPage } from "next";
import Hello from "@/app/_components/sayhello";
import RegisterForm from "@/components/forms/RegisterForm";

const About: NextPage = async () => {
  return (
    <div className="flex h-full w-full animate-fadeIn flex-col items-center justify-center">
      <h1>Works</h1>
      <RegisterForm />
    </div>
  );
};

export default About;
