import express from "express";
import { getSimulators, getSimulatorsByProfile, createSimulatorByProfile } from "./simulator.controller.";

export const router = express.Router();

router.get("/", getSimulators);

router.get("/:profile_id", getSimulatorsByProfile);

router.post("/:profile_id", createSimulatorByProfile);
