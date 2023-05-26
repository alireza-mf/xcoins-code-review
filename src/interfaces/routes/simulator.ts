import { RequestHandler } from "..";

// **********************************************************************************************************

export type IGetSimulatorsRes = {
  simulator: any;
};

/**
 * @method GET
 * @route /api/v1/simulators
 */
export type IGetSimulatorsApi = RequestHandler<{}, IGetSimulatorsRes>;

// **********************************************************************************************************

export type IGetSimulatorsByProfileParam = {
  profile_id: string;
};
export type IGetSimulatorsByProfileRes = {
  simulator: any;
};

/**
 * @method GET
 * @route /api/v1/simulators/:profile_id
 */
export type IGetSimulatorsByProfileApi = RequestHandler<IGetSimulatorsByProfileParam, IGetSimulatorsByProfileRes>;

// **********************************************************************************************************

export type ICreateSimulatorByProfileParam = {
  profile_id: string;
};
export type ICreateSimulatorByProfileBody = {
  date_recorded: Date,
  cryptocurrency: string,
  euros: number,
  price: number,
  quantity: number,
};
export type ICreateSimulatorByProfileRes = {
  simulator: any;
};

/**
 * @method POST
 * @route /api/v1/simulators/:profile_id
 */
export type ICreateSimulatorByProfileApi = RequestHandler<
  ICreateSimulatorByProfileParam,
  ICreateSimulatorByProfileRes,
  ICreateSimulatorByProfileBody
>;

// **********************************************************************************************************
