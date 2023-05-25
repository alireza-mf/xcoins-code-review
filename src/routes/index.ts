import express from "express";
import { router as V1 } from "./v1";

export const router = express.Router();

router.use("/v1", V1);
