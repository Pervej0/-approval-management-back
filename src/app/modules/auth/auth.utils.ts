import { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { TTokenPayload } from "./auth.type";

export const hashedPassword = (schema: Schema) => {
  schema.pre("save", async function (next) {
    if (this.isModified("password")) {
      this.password = await bcrypt.hash(this.password as string, 12);
    }
    next();
  });
};

export const createToken = (payload: TTokenPayload, key: string) => {
  const token = jwt.sign(payload, key);
  return token;
};
