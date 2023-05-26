import { List, ValidateFunction } from "express-json-validator-middleware";

export const getFavoritesByProfileSchema: List<ValidateFunction> = {
  params: {
    type: "object",
    required: ["profile_id"],
    properties: {
      profile_id: {
        type: "string",
      },
    },
  },
};
