import { HttpStatus, ICreateProfileApi, IGetProfilesApi } from "../../../interfaces";
import { Profile } from "../../../models/Profile";
import { responseSuccess, responseUnSuccess } from "../../../utils";

export const getProfiles = <IGetProfilesApi>(async (req, res) => {
  const profile = await Profile.find().lean();
  return responseSuccess(res, { profile }, HttpStatus.SUCCESS);
});

export const createProfile = <ICreateProfileApi>(async (req, res) => {
  const { email, name, nickname } = req.body;

  let profile = await Profile.findOne({
    $or: [{ email }, { nickname }],
  }).exec();

  if (profile) {
    return responseUnSuccess(res, "Profile already existed.", 400);
  }

  profile = await Profile.create({ name, email, nickname });

  return responseSuccess(res, { profile }, HttpStatus.CREATED);
});
