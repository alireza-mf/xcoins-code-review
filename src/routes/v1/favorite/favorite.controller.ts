import { HttpStatus, IGetFavoritesApi, IGetFavoritesByProfileApi } from "../../../interfaces";
import { Favorite } from "../../../models/Favorite";
import { responseSuccess } from "../../../utils";

export const getFavorites = <IGetFavoritesApi>(async (req, res) => {
  const favorite = await Favorite.find().lean();
  return responseSuccess(res, { favorite }, HttpStatus.SUCCESS);
});

export const getFavoritesByProfile = <IGetFavoritesByProfileApi>(async (req, res) => {
  let query = {};
  const { profile_id } = req.params;
  query = { profile_id };
  const data = await Favorite.find(query);
  return responseSuccess(res, data, HttpStatus.SUCCESS);
});
