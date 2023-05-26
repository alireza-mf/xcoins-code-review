import request from "supertest";
import { app } from "../../../api";

describe("Profile tests", () => {
  it("should return all profiles", async () => {
    const response = await request(app).get("/api/v1/profiles");
    expect(response.status).toEqual(200);
  });

  it("should create a profile", async () => {
    const response = await request(app).post("/api/v1/profiles")
      .send({ email: "example@example.com", name: "test", nickname: "test" });
    expect(response.status).toEqual(200);
  });
});
