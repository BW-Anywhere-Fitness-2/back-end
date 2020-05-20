exports.seed = async function(knex) {
  await knex("instructor").insert([
    {
      id: 1,
      name: "Hulk Hogan",
      username: "hulk",
      password: "12345",
      email: "hulk@hogan.com",
      bio: "World class wrestler ready to get you buff!"
    },
    {
      id: 2,
      name: "Muscle Man",
      username: "muscle",
      password: "12345",
      email: "muscle@muscle.com",
      bio:
        "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
    },
    {
      id: 3,
      name: "Dwayne Johnson",
      username: "rock",
      password: "12345",
      email: "dwayne@therock.com",
      bio:
        "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
    },
    {
      id: 4,
      name: "The Undertaker",
      username: "undertaker",
      password: "12345",
      email: "undertaker@winning.com",
      bio:
        "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
    },
    {
      id: 5,
      name: "Ric Flair",
      username: "ricflair",
      password: "12345",
      email: "ric@legend.com",
      bio:
        "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
    },
    {
      id: 6,
      name: "John Cena",
      username: "john",
      password: "12345",
      email: "john@cena.com",
      bio:
        "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
    }
  ]);
};
