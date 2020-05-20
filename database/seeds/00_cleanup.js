exports.seed = async function(knex) {
  await knex("class").truncate();
  await knex("user").truncate();
  await knex("instructor").truncate();
};
