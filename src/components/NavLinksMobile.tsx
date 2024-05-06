import { SheetContent, SheetClose } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

const NavLinksMobile = () => {
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
        <Link href="/" className="hover:text-foreground">
          <SheetClose> Home</SheetClose>
        </Link>
        <Link
          href="/about"
          className="text-muted-foreground hover:text-foreground"
        >
          <SheetClose>About</SheetClose>
        </Link>
        <Link
          href="/works"
          className="text-muted-foreground hover:text-foreground"
        >
          <SheetClose>Works</SheetClose>
        </Link>
        <Link
          href="/blog"
          className="text-muted-foreground hover:text-foreground"
        >
          <SheetClose>Blog</SheetClose>
        </Link>
        <Link href="#" className="text-muted-foreground hover:text-foreground">
          CV
        </Link>
      </nav>
    </SheetContent>
  );
};

export default NavLinksMobile;
