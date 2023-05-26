import { HttpStatus, ICreateSimulatorByProfileApi, IGetSimulatorsApi, IGetSimulatorsByProfileApi } from "../../../interfaces";
import { Simulator } from "../../../models/Simulator";
import { responseSuccess } from "../../../utils";

export const getSimulators = <IGetSimulatorsApi>(async (req, res) => {
  const simulator = await Simulator.find().lean();
  return responseSuccess(res, { simulator }, HttpStatus.SUCCESS);
});

export const getSimulatorsByProfile = <IGetSimulatorsByProfileApi>(async (req, res) => {
  let query = {};
  const { profile_id } = req.params;
  query = { profile_id };
  const data = await Simulator.find(query);
  return responseSuccess(res, data, HttpStatus.SUCCESS);
});

export const createSimulatorByProfile = <ICreateSimulatorByProfileApi>(async (req, res) => {
  const { profile_id } = req.params;
  const newData = {
    ...req.body,
    profile_id,
  };
  const simulator = await Simulator.create(newData);
  return responseSuccess(res, { simulator }, HttpStatus.CREATED);
});
