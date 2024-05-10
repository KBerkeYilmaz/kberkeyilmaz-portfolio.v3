"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const NavLinks = () => {
  const pathname = usePathname();
  const isActive = (path: string) => {
    // Check if the path is the current route
    return pathname === path;
  };

  const getLinkClass = (path: string) => {
    return clsx("transition-colors hover:text-foreground tracking-wider", {
      "text-foreground": isActive(path),
      "text-muted-foreground": !isActive(path),
    });
  };

  return (
    <>
      <Link key="home" href="/" className={getLinkClass("/")}>
        Home
      </Link>
      {/* <Link key="about" href="/about" className={getLinkClass("/about")}>
        About
      </Link>
      <Link key="works" href="/works" className={getLinkClass("/works")}>
        Works
      </Link>
      <Link key="blog" href="/blog" className={getLinkClass("/blog")}>
        Blog
      </Link>
      <Link key="cv" href="/cv" className={getLinkClass("/cv")}>
        CV
      </Link> */}
    </>
  );
};

export default NavLinks;
