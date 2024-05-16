import type { NextPage } from "next";
import Hello from "@/app/_components/sayhello";
import RegisterForm from "@/components/forms/RegisterForm";

const About: NextPage = async () => {
  return (
    <div className="animate-fadeIn w-full h-full flex justify-center flex-col items-center">
      <h1>Works</h1>
      <RegisterForm />
    </div>
  )
};

export default About;