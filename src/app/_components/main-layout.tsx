import { Menu } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "@/components/theme-toggle";
import NavLinksMobile from "@/components/NavLinksMobile";
import NavLinks from "@/components/NavLinks";
const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  // const hello = await api.post.hello({ text: "from tRPC" });
  // const session = await getServerAuthSession();

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex h-[80vh] max-h-screen w-[90vw] flex-col rounded-xl border-2 p-8 shadow-2xl">
        <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 pb-2 md:px-6">
          <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
            {/* <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold md:text-base"
            >
              <Package2 className="h-6 w-6" />
              <span className="sr-only">Acme Inc</span>
            </Link> */}
            <div className="flex w-52 gap-2">
              <Avatar>
                <AvatarImage src="/profilepic.webp" />
                <AvatarFallback>KB</AvatarFallback>
              </Avatar>
              <div>
                <h1>Kutalmış Berke Yılmaz</h1>
                <span className="text-pretty text-xs text-slate-400 ">
                  Software Developer
                </span>
              </div>
            </div>
            <NavLinks />
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <NavLinksMobile />
          </Sheet>
          <div className="flex w-full items-center justify-end gap-4 md:ml-auto md:gap-2 lg:gap-4">
            {/* <form className="ml-auto flex-1 sm:flex-initial">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search products..."
                    className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                  />
                </div>
              </form> */}
            <ModeToggle />
          </div>
        </header>
        <main className="flex h-fit flex-1 flex-col gap-4 overflow-y-hidden pt-4 md:gap-8 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
