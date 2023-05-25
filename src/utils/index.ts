import { Response } from "express";

export const responseSuccess = async <T extends Record<string, any>>(res: Response<any, any>, data: T, status = 200) => {
  return res.status(status).json(data);
};

export const responseUnSuccess = async (res: Response<any, any>, message: string, status = 400) => {
  return res.status(status).json({ message });
};
