import type NextAuth, { type DefaultSession } from "next-auth";
import { type DefaultJWT } from "@auth/core/jwt";

declare module "next-auth" {
  // Extend session to hold the access_token
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
    };
  }

  // Extend token to hold the access_token before it gets put into session
  interface JWT {
    id: string;
    name: string;
    email: string;
  }
}
