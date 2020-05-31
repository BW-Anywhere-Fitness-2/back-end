const bcrypt = require("bcryptjs");

const db = require("../database/dbConfig");

function getUserInfo(id) {
  return db("user")
    .where({ id })
    .first("id", "username", "name", "email", "bio");
}

async function deleteClass(id) {
  await db("user")
    .where("id", id)
    .delete();
  return getAllUsers();
}

function getAllUsers() {
  return db("user").select("id", "username", "name", "email", "bio");
}

module.exports = {
  getUserInfo,
  getAllUsers,
  deleteClass
};
