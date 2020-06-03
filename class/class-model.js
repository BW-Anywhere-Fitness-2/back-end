const db = require("../database/dbConfig");

async function add(newclass, instructor_id) {
  return db("class")
    .insert({ ...newclass, instructor_id })
    .returning("id");
}

function updateClass(id, classinfo) {
  return db("class")
    .where("id", id)
    .update(classinfo);
}

async function deleteClass(id) {
  await db("class")
    .where("id", id)
    .delete();
  return getAllClasses();
}

function getAllClasses() {
  return db("instructor as i")
    .join("class as c", "i.id", "c.instructor_id")
    .select(
      "c.id",
      "c.location",
      "c.class_name",
      "c.class_type",
      "c.class_desc",
      "c.start_time",
      "c.duration",
      "c.intensity",
      "c.location",
      "c.registered",
      "c.max_size",
      "i.name as instructor_name"
    );
}

function getClassById(id) {
  return db("instructor as i")
    .join("class as c", "i.id", "c.instructor_id")
    .select(
      "c.id",
      "c.location",
      "c.class_name",
      "c.class_type",
      "c.class_desc",
      "c.start_time",
      "c.duration",
      "c.intensity",
      "c.location",
      "c.registered",
      "c.max_size",
      "i.name as instructor_name"
    )
    .where("c.id", id);
}

module.exports = {
  getAllClasses,
  add,
  updateClass,
  deleteClass,
  getClassById
};
