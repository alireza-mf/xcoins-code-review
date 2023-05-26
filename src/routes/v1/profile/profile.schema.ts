import { List, ValidateFunction } from "express-json-validator-middleware";

export const createProfileSchema: List<ValidateFunction> = {
  body: {
    type: "object",
    required: ["email", "name", "nickname"],
    properties: {
      email: {
        type: "string",
      },
      name: {
        type: "string",
      },
      nickname: {
        type: "string",
      },
    },
  },
};
