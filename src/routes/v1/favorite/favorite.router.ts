import express from "express";
import { validate } from "../../../middlewares/jsonValidator";
import { getFavorites, getFavoritesByProfile } from "./favorite.controller";
import { getFavoritesByProfileSchema } from "./favorite.schema";

export const router = express.Router();

router.get("/", getFavorites);

router.get("/:profile_id", validate(getFavoritesByProfileSchema), getFavoritesByProfile);
