exports.up = async function(knex) {
  await knex.schema.createTable("user", u => {
    u.increments("id");
    u.string("name", 255).notNullable();
    u.string("username", 255)
      .notNullable()
      .unique();
    u.string("password", 255).notNullable();
    u.string("email");
    u.string("bio");
  });

  await knex.schema.createTable("instructor", inst => {
    inst.increments("id");
    inst.string("name", 255).notNullable();
    inst
      .string("username", 255)
      .notNullable()
      .unique();
    inst.string("password", 255).notNullable();
    inst.string("email");
    inst.string("bio");
  });

  await knex.schema.createTable("class", cl => {
    cl.increments("id");
    cl.integer("instructor_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("instructor")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    cl.string("class_name").notNullable();
    cl.string("class_type").notNullable();
    cl.string("class_desc");
    cl.string("start_time").notNullable();
    cl.string("duration").notNullable();
    cl.string("intensity").notNullable();
    cl.string("location").notNullable();
    cl.integer("registered");
    cl.integer("max_size");
  });
};

exports.down = async function(knex) {
  return knex.schema
    .dropTableIfExists("class")
    .dropTableIfExists("instructor")
    .dropTableIfExists("user");
};
