import type { Config } from "drizzle-kit";
import { env } from "@/env";

export default ({
  schema: "./src/server/db/schema.ts",
  out: "./src/drizzle/migrations",
  driver: "pg",
  dbCredentials: {
    connectionString: env.DATABASE_URL,
  },
  verbose: true,
  tablesFilter: ["kberkeyilmaz-portfolio.v3_*"],
}) satisfies Config;
