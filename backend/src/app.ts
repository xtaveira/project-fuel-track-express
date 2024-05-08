import mongoose from "mongoose";
import express from "express";
import routes from "./routes";
import cors from "cors";

mongoose.connect("mongodb://127.0.0.1:27017/fuel-track");

const database = mongoose.connection;

database.once("connected", () => {
  console.log("Database connected");
});

database.on("error", () => {
  console.log("Database connection error");
});

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", routes);
app.listen(3001, () => {
  console.log("App listening on port 3001");
});
