import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import { userRouter } from "./routes/users.js";
import { recipesRouter } from "./routes/recipes.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connecting to RecipesAppDB...");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(3001, () => console.log("SERVER STARTED! ON PORT 3001!"));
