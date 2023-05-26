import { RequestHandler } from "..";

// **********************************************************************************************************

export type IGetProfilesRes = {
  profile: any;
};

/**
 * @method GET
 * @route /api/v1/profiles
 */
export type IGetProfilesApi = RequestHandler<{}, IGetProfilesRes>;

// **********************************************************************************************************

export type ICreateProfileBody = {
  email: string;
  name: string;
  nickname: string;
};
export type ICreateProfileRes = {
  profile: any;
};

/**
 * @method POST
 * @route /api/v1/profiles
 */
export type ICreateProfileApi = RequestHandler<{}, ICreateProfileRes, ICreateProfileBody>;

// **********************************************************************************************************
