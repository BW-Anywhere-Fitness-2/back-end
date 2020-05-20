exports.seed = async function(knex) {
  await knex("user").insert([
    {
      id: 1,
      name: "Tom Smith",
      username: "tom",
      password: "12345",
      email: "tom@yahoo.com",
      bio:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eleifend, diam interdum dapibus imperdiet, diam est sagittis mi, a mattis quam nulla et lacus."
    },
    {
      id: 2,
      name: "John Roberts",
      username: "john",
      password: "12345",
      email: "john@roberts.com",
      bio:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eleifend, diam interdum dapibus imperdiet, diam est sagittis mi, a mattis quam nulla et lacus."
    },
    {
      id: 3,
      name: "Bill Edwards",
      username: "bill",
      password: "12345",
      email: "bill@aol.com",
      bio:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eleifend, diam interdum dapibus imperdiet, diam est sagittis mi, a mattis quam nulla et lacus."
    },
    {
      id: 4,
      name: "Walker Randolph",
      username: "walker",
      password: "12345",
      email: "walker@compuserve.com",
      bio:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eleifend, diam interdum dapibus imperdiet, diam est sagittis mi, a mattis quam nulla et lacus."
    },
    {
      id: 5,
      name: "Tommy Jones",
      username: "tommy",
      password: "12345",
      email: "tom@spectrum.com",
      bio:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eleifend, diam interdum dapibus imperdiet, diam est sagittis mi, a mattis quam nulla et lacus."
    },
    {
      id: 6,
      name: "Jane Doe",
      username: "jane",
      password: "12345",
      email: "jane@frontier.com",
      bio:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eleifend, diam interdum dapibus imperdiet, diam est sagittis mi, a mattis quam nulla et lacus."
    }
  ]);
};
