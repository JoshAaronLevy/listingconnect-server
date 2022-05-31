exports.seed = function (knex, Promise) {
  return knex('administrators').del()
    .then(function () {
      return knex('administrators').insert([
        {
          id: 1,
          signup_date: null,
          status: "Active",
          email: 'joshaaronlevy@gmail.com',
          username: 'joshaaronlevy@gmail.com',
          roles: ["Administrator", "Agent", "Seller", "Buyer"],
          last_active: null
        }
      ]);
    }).then(() => knex.raw(`ALTER SEQUENCE administrators_id_seq RESTART WITH 2;`));
};