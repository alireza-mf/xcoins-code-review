import { RequestHandler } from "..";

// **********************************************************************************************************

export type IGetFavoritesRes = {
  favorite: any;
};

/**
 * @method GET
 * @route /api/v1/favorites
 */
export type IGetFavoritesApi = RequestHandler<{}, IGetFavoritesRes>;

// **********************************************************************************************************

export type IGetFavoritesByProfileParam = {
  profile_id: string;
};
export type IGetFavoritesByProfileRes = {
  favorite: any;
};

/**
 * @method GET
 * @route /api/v1/favorites/:profile_id
 */
export type IGetFavoritesByProfileApi = RequestHandler<IGetFavoritesByProfileParam, IGetFavoritesByProfileRes>;

// **********************************************************************************************************
