/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

const globalErrorHandler: ErrorRequestHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = StatusCodes.BAD_REQUEST;
  let message = err.message || "Something Went Wrong!";
  let error = err;

  if (err.name === "ValidationError") {
    statusCode = StatusCodes.FORBIDDEN;
    message = err.message;
    error = err.errors;
  } else if (err?.code === 11000) {
    message = error.message;
    const errorFields = Object.keys(err.keyValue).map(
      (val) => `${val} value must be unique!`
    );
    message = errorFields.join("");
  }

  res.status(err.status || StatusCodes.INTERNAL_SERVER_ERROR);
  res.json({
    statusCode,
    success: false,
    message: message,
    error,
  });

  next();
};

export default globalErrorHandler;
