import express from "express";
import { getProfiles, createProfile } from "./profile.controller";

export const router = express.Router();

router.get("/", getProfiles);

router.post("/", createProfile);
