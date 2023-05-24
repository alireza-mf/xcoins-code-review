import express from "express";
import { Simulator } from "../models/Simulator";
import cors from "cors";
import { responseSuccess } from "../utils";

const app = express();
app.use(cors());

export const router = express.Router();

router.get("/api/simulator", async (req, res) => {
  const simulator = await Simulator.find().lean();
  return responseSuccess(res, { simulator }, 200);
});

router.get("/api/simulator/:profile_id", async (req, res) => {
  let query = {};
  const { profile_id } = req.params;
  query = { profile_id };
  const data = await Simulator.find(query);
  return responseSuccess(res, data, 200);
});

router.post("/api/simulator/:profile_id", async (req, res) => {
  const { profile_id } = req.params;
  const newData = {
    ...req.body,
    profile_id,
  };
  const simulator = await Simulator.create(newData);
  return responseSuccess(res, { simulator }, 201);
});
