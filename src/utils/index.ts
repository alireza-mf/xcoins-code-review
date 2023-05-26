import { Response } from "express";
import { HttpStatus } from "../interfaces";

export const responseSuccess = async <T extends Response>(res: T, data: Parameters<T["send"]>[0], status: HttpStatus = 200) => {
  return res.status(status).json(data);
};

export const responseUnSuccess = async (res: Response, message: string, status: HttpStatus = 400) => {
  return res.status(status).json({ message });
};
