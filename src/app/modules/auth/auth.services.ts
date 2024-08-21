import config from "../../config";
import userModel from "./auth.model";
import { TRegister } from "./auth.type";
import { createToken } from "./auth.utils";

export const createUserDB = async (payload: TRegister) => {
  const result = await userModel.create(payload);
  if (!result) {
    throw new Error("Something went wrong!");
  }
  const tokenPayload = {
    fullName: result.fullName,
    email: result.email,
  };
  const accessToken = createToken(tokenPayload, config.ACCESS_KEY as string);
  const refreshToken = createToken(tokenPayload, config.REFRESH_KEY as string);

  return {
    result,
    accessToken,
    refreshToken,
  };
};
