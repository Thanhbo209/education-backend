import express from "express";
import "dotenv/config";
import subjectsRouter from "./routes/subjects.js";
import cors from "cors";
import "dotenv/config";
import securityMiddleware from "./middleware/security.js";
import { auth } from "./lib/auth.js";
import { toNodeHandler } from "better-auth/node";
import usersRouter from "./routes/users.js";
import classesRouter from "./routes/classes.js";
import AgentAPI from "apminsight";
AgentAPI.config();

const app = express();
const port = 8000;

if (!process.env.FRONTEND_URL)
  throw new Error("FRONTEND_URL is not set in .env file");

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

app.all("/api/auth/*splat", toNodeHandler(auth)); // better-auth route handler

app.use(express.json());
app.use(securityMiddleware);

app.use("/api/subjects", subjectsRouter);
app.use("/api/users", usersRouter);
app.use("/api/classes", classesRouter);

app.listen(port, () => console.log(`Server is running on port ${port}`));
