const bcrypt = require("bcryptjs");

const db = require("../database/dbConfig");

async function add(instructor) {
  console.log(instructor);
  instructor.password = await bcrypt.hash(instructor.password, 14);

  const [id] = await db("instructor").insert(instructor);
  return findById(id);
}

function findBy(filter) {
  return db("instructor")
    .select("id", "username", "password")
    .where(filter);
}

function findById(id) {
  return db("instructor")
    .select("id", "username")
    .where({ id })
    .first();
}

function getInstInfo(id) {
  return db("instructor")
    .where({ id })
    .first("id", "username", "name", "email", "bio");
}

function getAllInst() {
  return db("instructor").select("id", "username", "name", "email", "bio");
}

module.exports = {
  add,
  findById,
  findBy,
  getInstInfo,
  getAllInst
};
