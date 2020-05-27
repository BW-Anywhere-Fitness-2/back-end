const supertest = require("supertest");
const server = require("../index");
const Users = require("../auth/auth-model");
const db = require("../database/dbConfig");

let token;

beforeEach(async done => {
  await Users.add({
    name: "Mr. Cool",
    username: "cool3",
    password: "beans",
    email: "cool@cool.com",
    bio: "Cool bio"
  });

  const userLogin = await supertest(server)
    .post("/api/auth/login/user")
    .send({ username: "cool3", password: "beans" });

  token = userLogin.body.token;
  done();
});

describe("individual endpoints for users", () => {
  it("get specific user", async () => {
    const instructors = await supertest(server)
      .get("/api/users/1")
      .set("Authorization", token);
    expect(instructors.body.name).toBe("Mr. Cool");
    expect(instructors.status).toBe(200);
  });
});
