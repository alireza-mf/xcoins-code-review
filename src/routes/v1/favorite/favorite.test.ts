import request from "supertest";
import { app } from "../../../api";

describe("Favorite tests", () => {
  it("should return all favorites", async () => {
    const response = await request(app).get("/api/v1/favorites");
    expect(response.status).toEqual(200);
  });

  it("should return favorites with given profile id", async () => {
    const response = await request(app).get(`/api/v1/favorites/${"first_profile"}`);
    expect(response.status).toEqual(200);
  });
});
