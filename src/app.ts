import express, { json } from "express";
import { StatusCodes } from "http-status-codes";
import rootRoute from "./app/routes";
import cors from "cors";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import notFound from "./app/middleware/notFound";
const app = express();

// middleware to read json data
app.use(express.json());
// middleware for request from client url
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    statusCode: StatusCodes.OK,
    message: "Welcome To Approval Management Backend Site",
  });
});

// handling all api routes
app.use(rootRoute);
// handling globally occurred errors
app.use(globalErrorHandler);
// Handling The not found Api
app.use(notFound);

export default app;
