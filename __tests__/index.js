const supertest = require("supertest");
const server = require("../index");
const db = require("../database/dbConfig");

const Users = require("../auth/auth-model");

let dbToken;

afterAll(async () => {
  await db.destroy();
});

describe("login and register endpoint tests", () => {
  beforeEach(async () => {
    await db("user").truncate();
    await db("instructor").truncate();
  });
  it("POST register new user", async () => {
    await supertest(server)
      .post("/api/auth/register/user")
      .send({
        name: "Mr. Cool",
        username: "cool",
        password: "beans",
        email: "cool@cool.com",
        bio: "Cool bio"
      })
      .then(res => {
        expect(res.statusCode).toBe(201);
      });
  });
  it("POST user login return with JSON", async () => {
    await supertest(server)
      .post("/api/auth/login/user")
      .send({ username: "cool", password: "beans" })
      .then(res => {
        expect(res.type).toBe("application/json");
      });
  });
  it("GET /classes token test", async () => {
    await Users.add({
      name: "Mr. Cool",
      username: "cool",
      password: "beans",
      email: "cool@cool.com",
      bio: "Cool bio"
    });
    await supertest(server)
      .post("/api/auth/login/user")
      .send({ username: "cool", password: "beans" })
      .then(res => {
        expect(res.type).toBe("application/json");
        return res.body.token;
      })
      .then(token => {
        return supertest(server)
          .get("/api/classes")
          .set("Authorization", token)
          .expect(200);
      });
  });

  it("POST register new instructor", async () => {
    await supertest(server)
      .post("/api/auth/register/instructor")
      .send({
        name: "Mr. Muscles",
        username: "muscles",
        password: "fordays",
        email: "muscles@muscles.com",
        bio: "Cool muscles bro"
      })
      .then(res => {
        expect(res.statusCode).toBe(201);
      });
  });
  it("POST instructor login return with JSON", async () => {
    await supertest(server)
      .post("/api/auth/login/instructor")
      .send({ username: "muscles", password: "fordays" })
      .then(res => {
        expect(res.type).toBe("application/json");
      });
  });
  it("GET /classes data test", async () => {
    await Users.add({
      name: "Mr. Cool",
      username: "cool",
      password: "beans",
      email: "cool@cool.com",
      bio: "Cool bio"
    });
    await supertest(server)
      .post("/api/auth/login/user")
      .send({ username: "cool", password: "beans" })
      .then(res => {
        return res.body.token;
      })
      .then(token => {
        return supertest(server)
          .get("/api/classes/1")
          .set("Authorization", token)
          .then(res => {
            expect(res.body.location).toBe("Durham, NC");
          });
      });
  });
});
// describe("individual class data test", () => {
//   beforeEach(async () => {
//     await db("user").truncate();
//     await db("instructor").truncate();
//   });
