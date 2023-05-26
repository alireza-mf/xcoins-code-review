import { List, ValidateFunction } from "express-json-validator-middleware";

export const getSimulatorsByProfileSchema: List<ValidateFunction> = {
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

export const createSimulatorByProfileSchema: List<ValidateFunction> = {
  params: {
    type: "object",
    required: ["profile_id"],
    properties: {
      profile_id: {
        type: "string",
      },
    },
  },
  body: {
    type: "object",
    required: ["date_recorded", "cryptocurrency", "euros", "price", "quantity"],
    properties: {
      date_recorded: {
        type: "string",
      },
      cryptocurrency: {
        type: "string",
      },
      euros: {
        type: "number",
      },
      price: {
        type: "number",
      },
      quantity: {
        type: "number",
      },
    },
  },
};
