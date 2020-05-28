// exports.seed = async function(knex) {
//   if (process.env.NODE_ENV != "production") {
//     await knex("class").truncate();
//     await knex("user").truncate();
//     await knex("instructor").truncate();
//   }
// };

exports.seed = async function(knex) {
  switch (process.env.NODE_ENV) {
    case "production":
      await knex.raw("TRUNCATE TABLE class RESTART IDENTITY CASCADE");
      await knex.raw("TRUNCATE TABLE user RESTART IDENTITY CASCADE");
      await knex.raw("TRUNCATE TABLE instructor RESTART IDENTITY CASCADE");
      break;
    default:
      // anything not using Postgres
      await knex("class").truncate();
      await knex("user").truncate();
      await knex("instructor").truncate();
  }
};
