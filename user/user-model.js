const bcrypt = require("bcryptjs");

const db = require("../database/dbConfig");

function getUserInfo(id) {
  return db("user")
    .where({ id })
    .first("id", "username", "name", "email", "bio");
}

function getAllUsers() {
  return db("user").select("id", "username", "name", "email", "bio");
}

module.exports = {
  getUserInfo,
  getAllUsers
};
