const bcrypt = require("bcryptjs");

const db = require("../database/dbConfig");

async function add(user) {
  user.password = await bcrypt.hash(user.password, 14);

  const [id] = await db("user")
    .insert(user)
    .returning("id");
  return findById(id);
}

function findBy(filter) {
  return db("user")
    .select("id", "username", "password")
    .where(filter);
}

function findById(id) {
  return db("user")
    .select("id", "username")
    .where({ id })
    .first();
}

function getUserInfo(id) {
  return db("user")
    .where({ id })
    .first("id", "username", "name", "email", "bio");
}

function getAllUsers() {
  return db("user").select("id", "username", "name", "email", "bio");
}

module.exports = {
  add,
  findById,
  findBy,
  getUserInfo,
  getAllUsers
};
