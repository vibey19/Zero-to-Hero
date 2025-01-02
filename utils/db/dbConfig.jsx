import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
import dotenv from "dotenv";
dotenv.config();

const sql = neon(
  "postgresql://neondb_owner:ArtnF6gGDN9p@ep-shy-bird-a5tkrd72.us-east-2.aws.neon.tech/zero2hero?sslmode=require"
);
export const db = drizzle(sql, { schema });
