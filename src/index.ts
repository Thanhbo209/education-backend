import express from "express";
import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";

const app = express();
const port = 3000;
app.use(express.json());
const db = drizzle(process.env.DATABASE_URL!);

app.listen(port, () => console.log(`Server is running on port ${port}`));
