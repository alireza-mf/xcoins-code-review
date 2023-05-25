import { Profile } from "../../../models/Profile";
import { responseSuccess, responseUnSuccess } from "../../../utils";

export const getProfiles = (async (req, res) => {
  const profile = await Profile.find().lean();
  return responseSuccess(res, { profile }, 200);
});

export const createProfile = (async (req, res) => {
  const { email, name, nickname } = req.body;

  let profile = await Profile.findOne({
    $or: [{ email }, { nickname }],
  }).exec();

  if (profile) {
    return responseUnSuccess(res, "Profile already existed.", 400);
  }

  profile = await Profile.create({ name, email, nickname });

  return responseSuccess(res, { profile }, 201);
});
