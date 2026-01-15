import express from "express";
import "dotenv/config";
import { db } from "./db";

const app = express();
const port = 3000;
app.use(express.json());

app.listen(port, () => console.log(`Server is running on port ${port}`));
