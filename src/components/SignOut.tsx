import { signOut } from "next-auth/react";
import { Button } from "./ui/button";

export function SignOut() {
  return (
    <Button size="sm" className="w-full">
      Sign Out
    </Button>
  );
}
