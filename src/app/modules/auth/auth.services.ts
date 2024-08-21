import config from "../../config";
import userModel from "./auth.model";
import { TLogin, TRegister } from "./auth.type";
import { createToken } from "./auth.utils";
import bcrypt from "bcrypt";

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

export const loginDB = async (payload: TLogin) => {
  try {
    const getUser = await userModel.findOne({ email: payload.email }).exec();
    if (!getUser) {
      throw new Error();
    }

    const comparePassword = await bcrypt.compare(
      payload.password,
      getUser?.password
    );

    if (!comparePassword) {
      throw new Error("Please enter a correct password!");
    }

    const tokenPayload = {
      fullName: getUser.fullName,
      email: getUser.email,
    };
    const accessToken = createToken(tokenPayload, config.ACCESS_KEY as string);

    return accessToken;
  } catch (error) {
    console.log(error);
  }
};
