"use client";
import { Check, ZoomIn } from "lucide-react";
import { type workType } from "@/lib/types/workType";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { IconBrandGithub, IconBrandVercel } from "@tabler/icons-react";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type WorkCardProps = React.ComponentProps<typeof Card> & {
  work: workType;
};
import { useState } from "react";

export function WorkCard({ className, work, ...props }: WorkCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <Dialog modal={true}>
      <DialogTrigger asChild onClick={(e) => e.stopPropagation()}>
        <Card
          onClick={() => setIsDialogOpen(true)}
          className={cn(
            "duration-50 flex min-w-full max-w-md cursor-pointer flex-col bg-transparent transition-all hover:scale-[1.02]",
            className,
          )}
          {...props}
        >
          <CardHeader>
            <CardTitle className="mb-6">{work.name}</CardTitle>
            <CardDescription className="line-clamp-4">
              {work.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-1 flex-col justify-end">
            <div className="flex items-center gap-1 justify-start">
              {work.links &&
                Object.entries(work.links).map(([key, value], index) => (
                  <div
                    key={key + index}
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center"
                  >
                    <a
                      className="cursor-pointer text-sm font-medium leading-none hover:text-blue-500 "
                      target="_blank"
                      rel="noopener noreferrer"
                      href={value}
                    >
                      {key === "github" ? (
                        <IconBrandGithub className="h-4 w-4" />
                      ) : (
                        "Visit Site"
                      )}
                    </a>
                  </div>
                ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              <ZoomIn className="mr-2 h-4 w-4" /> Inspect
            </Button>
          </CardFooter>
        </Card>
      </DialogTrigger>
      <DialogContent className="min-h-[60%] min-w-[60%]">
        <DialogHeader>
          <DialogTitle className="mb-10 text-2xl font-bold">
            {work.name}
          </DialogTitle>
          <DialogDescription>{work.description}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
