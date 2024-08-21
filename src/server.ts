import { Server } from "http";
// import app from "./app";
import "dotenv/config";
import app from "./app";
import { MongoClient } from "mongodb";
import mongoose from "mongoose";
// import config from "./App/config";

const uri = process.env.DATABASE_URL as string;
let server: Server;
const main = async () => {
  await mongoose.connect(uri);
  console.log("Database Connected successfully");

  server = app.listen(process.env.PORT, () => {
    console.log("The Server is running on port", process.env.PORT);
  });
};

// unhandledRejection and uncaughtException error handling--
process.on("unhandledRejection", () => {
  console.log("unhandledRejection error detected, server is shutting down!");

  if (server) {
    server.close();
    process.exit(1);
  } else {
    process.exit(1);
  }
});

process.on("uncaughtException", () => {
  console.log("UncaughtException error detected, server is shutting down!");
  process.exit(1);
});

main();
