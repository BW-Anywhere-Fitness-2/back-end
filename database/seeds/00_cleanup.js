exports.seed = async function(knex) {
  if (process.env.NODE_ENV != "production") {
    await knex("class").truncate();
    await knex("user").truncate();
    await knex("instructor").truncate();
  }
};
