const supertest = require("supertest");
const server = require("../index");
const db = require("../database/dbConfig");

const Users = require("../auth/auth-model");
const Instructors = require("../instructor/instructor-model");

let token;

beforeEach(async done => {
  const userLogin = await supertest(server)
    .post("/api/auth/login/instructor")
    .send({ username: "hulk", password: "pass" });

  token = userLogin.body.token;
  console.log(token);
  done();
});

describe("instructor endpoints", () => {
  it("get individual instructor", async () => {
    const inst = await supertest(server)
      .get("/api/instructors/1")
      .set("Authorization", token);
    expect(inst.body.name).toBe("Hulk Hogan");
    expect(inst.status).toBe(200);
  });
});

// afterAll(async () => {
//   await db.destroy();
// });

// describe("login and register endpoint tests", () => {
//   beforeEach(async () => {
//      await db("user").truncate();
//      await db("instructor").truncate();
//   });
//   it("POST register new user", async () => {
//     await supertest(server)
//       .post("/api/auth/register/user")
//       .send({
//         name: "Mr. Cool",
//         username: "cool",
//         password: "beans",
//         email: "cool@cool.com",
//         bio: "Cool bio"
//       })
//       .then(res => {
//         expect(res.statusCode).toBe(201);
//       });
//   });
//   it("POST user login return with JSON", async () => {
//     await supertest(server)
//       .post("/api/auth/login/user")
//       .send({ username: "cool", password: "beans" })
//       .then(res => {
//         expect(res.type).toBe("application/json");
//       });
//   });
//   it("GET /classes token test", async () => {
//     await Users.add({
//       name: "Mr. Cool",
//       username: "cool",
//       password: "beans",
//       email: "cool@cool.com",
//       bio: "Cool bio"
//     });
//     await supertest(server)
//       .post("/api/auth/login/user")
//       .send({ username: "cool", password: "beans" })
//       .then(res => {
//         expect(res.type).toBe("application/json");
//         return res.body.token;
//       })
//       .then(token => {
//         return supertest(server)
//           .get("/api/classes")
//           .set("Authorization", token)
//           .expect(200);
//       });
//   });

//   it("POST register new instructor", async () => {
//     await supertest(server)
//       .post("/api/auth/register/instructor")
//       .send({
//         name: "Mr. Muscles",
//         username: "muscles",
//         password: "fordays",
//         email: "muscles@muscles.com",
//         bio: "Cool muscles bro"
//       })
//       .then(res => {
//         expect(res.statusCode).toBe(201);
//       });
//   });
//   it("POST instructor login return with JSON", async () => {
//     await supertest(server)
//       .post("/api/auth/login/instructor")
//       .send({ username: "muscles", password: "fordays" })
//       .then(res => {
//         expect(res.type).toBe("application/json");
//       });
//   });
//   it("GET /classes data test", async () => {
//     await Instructors.add({
//       name: "Mr. Cool",
//       username: "cool",
//       password: "beans",
//       email: "cool@cool.com",
//       bio: "Cool bio"
//     });
//     await supertest(server)
//       .post("/api/auth/login/instructor")
//       .send({ username: "cool", password: "beans" })
//       .then(res => {
//         return res.body.token;
//       })
//       .then(token => {
//         console.log("token from classes test", token);
//         return supertest(server)
//           .post("api/classes/instructor/1")
//           .set("Authorization", token)
//           .then(res => {
//             console.log("res.statusCode", res.statusCode);
//             expect(res.body.location).toBe("Durham, NC");
//           });
//       });
//   });
// });
