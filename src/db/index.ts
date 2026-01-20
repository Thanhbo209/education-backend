import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http"; // Change this import based on the selected driver
import { neon } from "@neondatabase/serverless"; // Change this import based on the selected driver
import dotenv from "dotenv";
dotenv.config();

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined");
}

const sql = neon(process.env.DATABASE_URL); // Change this line based on the selected driver
export const db = drizzle(sql); // Change this line based on the selected driver
