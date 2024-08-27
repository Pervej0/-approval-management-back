import { RequestHandler } from "express";
import asyncCatch from "../../utils/asyncCatch";
import sendResponse from "../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";
import { createApprovalFilesDB } from "./approval-files.services";

export const createApprovalFiles: RequestHandler = asyncCatch(
  async (req, res) => {
    const data = req.body;
    const result = await createApprovalFilesDB(data);

    sendResponse(res, {
      statusCode: StatusCodes.CREATED,
      success: true,
      message: "Approval Letter submitted successfully!",
      data: result,
    });
  }
);
