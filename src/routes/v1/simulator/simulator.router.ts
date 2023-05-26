import express from "express";
import { validate } from "../../../middlewares/jsonValidator";
import { getSimulators, getSimulatorsByProfile, createSimulatorByProfile } from "./simulator.controller.";
import { getSimulatorsByProfileSchema, createSimulatorByProfileSchema } from "./simulator.schema";

export const router = express.Router();

router.get("/", getSimulators);

router.get("/:profile_id", validate(getSimulatorsByProfileSchema), getSimulatorsByProfile);

router.post("/:profile_id", validate(createSimulatorByProfileSchema), createSimulatorByProfile);
