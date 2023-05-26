import express from "express";
import { validate } from "../../../middlewares/jsonValidator";
import { getFavoritesByProfileSchema } from "../favorite/favorite.schema";
import { getProfiles, createProfile } from "./profile.controller";

export const router = express.Router();

router.get("/", getProfiles);

router.post("/", validate(getFavoritesByProfileSchema), createProfile);
