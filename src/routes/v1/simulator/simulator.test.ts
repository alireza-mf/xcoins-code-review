import request from "supertest";
import { app } from "../../../api";

describe("Simulator tests", () => {
  it("should return all simulators", async () => {
    const response = await request(app).get("/api/v1/simulators");
    expect(response.status).toEqual(200);
  });

  it("should return simulators with given profile id", async () => {
    const response = await request(app).get(`/api/v1/simulators/${"first_profile"}`);
    expect(response.status).toEqual(200);
  });

  it("should create a simulator with given profile id", async () => {
    const response = await request(app).post(`/api/v1/simulators/${"first_profile"}`)
      .send({ email: "example@example.com", name: "test", nickname: "test" });
    expect(response.status).toEqual(200);
  });
});
