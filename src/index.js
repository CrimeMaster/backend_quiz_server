import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";

import apiRoutes from "./routes/index.js";
import { connectDB } from "./config/database.js";
import errorMiddleWare from "./middleware/error-middleware.js";
import cors from "cors";
dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.use(errorMiddleWare); // WARN: need to be in the end of the app

app.listen(process.env.PORT, async () => {
  console.log(`connected to port : `, process.env.PORT);
  const response = await connectDB().catch((e) => console.log(e));
  if (response) console.log("connect to db");
});


