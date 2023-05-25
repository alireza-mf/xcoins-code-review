import express from "express";
import { getFavorites, getFavoritesByProfile } from "./favorite.controller";

export const router = express.Router();

router.get("/", getFavorites);

router.get("/:profile_id", getFavoritesByProfile);
