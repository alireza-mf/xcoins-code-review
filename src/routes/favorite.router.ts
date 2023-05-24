import express from "express";
import { Favorite } from "../models/Favorite";
import { responseSuccess } from "../utils";

export const router = express.Router();

router.get("/api/favorite", async (req, res) => {
  const favorite = await Favorite.find().lean();
  return responseSuccess(res, { favorite }, 200);
});

router.get("/api/favorite/:profile_id", async (req, res) => {
  let query = {};
  const { profile_id } = req.params;
  query = { profile_id };
  const data = await Favorite.find(query);
  return responseSuccess(res, data, 200);
});
