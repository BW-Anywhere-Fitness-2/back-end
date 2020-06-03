const bcrypt = require("bcryptjs");

const db = require("../database/dbConfig");

async function add(instructor) {
  console.log(instructor);
  instructor.password = await bcrypt.hash(instructor.password, 14);

  const [id] = await db("instructor")
    .insert(instructor)
    .returning("id");
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

function getInstClasses(id) {
  return db("class as c").where("instructor_id", id);
}

function getAllInst() {
  return db("instructor").select("id", "username", "name", "email", "bio");
}

async function deleteInstructor(id) {
  await db("instructor")
    .where("id", id)
    .delete();
  return getAllInst();
}

module.exports = {
  add,
  findById,
  findBy,
  getInstInfo,
  getAllInst,
  getInstClasses,
  deleteInstructor
};
