import { NextFunction, Request, Response } from "express";
import { responseUnSuccess } from "../utils";

export const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
  console.error("[Internal Error]", error);

  return responseUnSuccess(res, "Internal error occurred.", 500);
};
