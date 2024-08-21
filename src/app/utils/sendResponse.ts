import { Response } from "express";
import { TJsonData } from "../types/jsonData";

const sendResponse = <T>(res: Response, jsonData: TJsonData<T>) => {
  res.status(jsonData.statusCode).json({
    statusCode: jsonData.statusCode,
    success: jsonData.success,
    message: jsonData.message,
    data: jsonData?.data,
  });
};

export default sendResponse;
