import { Request, RequestHandler, Response } from "express";
import asyncCatch from "../../utils/asyncCatch";
import { createUserDB, loginDB } from "./auth.services";
import { StatusCodes } from "http-status-codes";
import sendResponse from "../../utils/sendResponse";

export const createUser: RequestHandler = asyncCatch(
  async (req: Request, res: Response) => {
    const data = req.body;
    const result = await createUserDB(data);

    // pass refreshToken inside cookie
    res.cookie("refreshToken", result.refreshToken);

    sendResponse(res, {
      statusCode: StatusCodes.CREATED,
      success: true,
      message: "User registered successfully!",
      data: result,
    });
  }
);

export const login: RequestHandler = asyncCatch(
  async (req: Request, res: Response) => {
    const data = req.body;
    const result = await loginDB(data);

    sendResponse(res, {
      statusCode: StatusCodes.CREATED,
      success: true,
      message: "User log in successfully!",
      data: result,
    });
  }
);
