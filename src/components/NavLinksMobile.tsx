"use client";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { SheetContent, SheetClose } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

const NavLinksMobile = () => {
  const pathname = usePathname();
  const isActive = (path: string) => {
    // Check if the path is the current route
    return pathname === path;
  };

  const getLinkClass = (path: string) => {
    return clsx("transition-colors hover:text-foreground", {
      "text-foreground": isActive(path),
      "text-muted-foreground": !isActive(path),
    });
  };

  return (
    <SheetContent side="left">
      <nav className="grid gap-6 text-lg font-medium">
        <div className="flex w-52 gap-2 tracking-tighter">
          <Avatar>
            <AvatarImage src="/profilepic.webp" alt="profile" />
            <AvatarFallback>KB</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-sm">Kutalmış Berke Yılmaz</h1>
            <span className="text-pretty text-xs text-slate-400 ">
              Software Developer
            </span>
          </div>
        </div>
        <Link href="/" className={getLinkClass("/")}>
          <SheetClose> Home</SheetClose>
        </Link>
        <Link href="/about" className={getLinkClass("/about")}>
          <SheetClose>About</SheetClose>
        </Link>
        <Link href="/works" className={getLinkClass("/works")}>
          <SheetClose>Works</SheetClose>
        </Link>
        <Link href="/blog" className={getLinkClass("/blog")}>
          <SheetClose>Blog</SheetClose>
        </Link>
        <Link href="#" className={getLinkClass("/cv")}>
          CV
        </Link>
      </nav>
    </SheetContent>
  );
};

export default NavLinksMobile;
