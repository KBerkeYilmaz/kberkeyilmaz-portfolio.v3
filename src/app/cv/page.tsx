import { type NextPage } from "next";
import { Construction } from "lucide-react";

const CV: NextPage = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex gap-4 items-center">
        <Construction width={80} height={80} className="text-red-500" />

        <h1 className="text-3xl">Under Construction</h1>
      </div>
    </div>
  );
};

export default CV;
