import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import {
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
  varchar,
} from "drizzle-orm/pg-core";
export const db = drizzle(sql);

export const UsersTable = pgTable(
  "users",
  {
    _id: serial("_id").primaryKey(),
    username: text("username").notNull(),
    email: varchar("email").notNull(),
    
  },
  (users) => {
    return {
      uniqueIdx: uniqueIndex("unique_idx").on(users.email),
    };
  }
);
