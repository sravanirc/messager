import express from "express";
import cors from "cors";
import "dotenv/config";
import { connectDB } from "./db.js";
import { myAppRouter } from "./router.js";
const app = express();
const port = 5001;

app.use(cors());

app.use(express.json());
app.use("/", myAppRouter);

app.listen(port, () => {
  console.log(process.env.DbUserName);
  connectDB();
  console.log(`I am server, i am listening at port ${port}`);
});
