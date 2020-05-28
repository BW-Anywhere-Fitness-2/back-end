// exports.seed = async function(knex) {
//   if (process.env.NODE_ENV != "production") {
//     await knex("class").truncate();
//     await knex("user").truncate();
//     await knex("instructor").truncate();
//   }
// };

// exports.seed = async function(knex) {
//   switch (process.env.NODE_ENV) {
//     case "production":
//       await knex.raw("TRUNCATE TABLE user CASCADE");
//       await knex.raw("TRUNCATE TABLE instructor CASCADE");
//       await knex.raw("TRUNCATE TABLE class CASCADE");
//       break;
//     default:
//       // anything not using Postgres
//       await knex("user").truncate();
//       await knex("instructor").truncate();
//       await knex("class").truncate();
//   }
// };
