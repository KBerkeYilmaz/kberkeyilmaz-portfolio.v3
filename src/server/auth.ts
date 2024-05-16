import NextAuth, { type User, CredentialsSignin } from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import bcrypt from "bcrypt";
import { ZodError } from "zod";
import Credentials from "next-auth/providers/credentials";
import { signInSchema } from "@/lib/schemas/signInSchema";
// Your own logic for dealing with plaintext password strings; be careful!
import { saltAndHashPassword, getUserFromDb } from "@/lib/utils/signIn";
import { db } from "./db/schema";
import { allUsers } from "./db";
class InvalidLoginError extends CredentialsSignin {
  code = "Invalid identifier or password";
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: DrizzleAdapter(db),
  session: { strategy: "jwt", maxAge: 24 * 60 * 60 },
  secret: process.env.AUTH_SECRET,
  basePath: "/api/auth",
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: { label: "Bura Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<User | null> {
        try {
          const { email, password } =
            await signInSchema.parseAsync(credentials);

          const user = allUsers.find((user) => user.email === email);

          if (!user || !bcrypt.compareSync(password, user.password)) {
            throw new InvalidLoginError();
          }

          


          return user
            ? { id: user.id, name: user.name, email: user.email }
            : null;
        } catch (error) {
          if (error instanceof ZodError) {
            // Return `null` to indicate that the credentials are invalid
            return null;
          }
          throw error;
        }
      },
    }),
  ],
});
