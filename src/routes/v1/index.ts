import express from "express";
import { router as favoriteRouter } from "./favorite/favorite.router";
import { router as profileRouter } from "./profile/profile.router";
import { router as simulatorRouter } from "./simulator/simulator.router";

export const router = express.Router();

router.use("/favorites", favoriteRouter);
router.use("/profiles", profileRouter);
router.use("/simulators", simulatorRouter);
