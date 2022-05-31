exports.seed = function (knex, Promise) {
  return knex('messages').del()
    .then(function () {
      return knex('messages').insert([
        {
          id: 1,
          signup_date: null,
          status: "Active",
          email: 'joshaaronlevy@gmail.com',
          username: 'joshaaronlevy@gmail.com',
          roles: {
            activeRoles: ["Administrator", "Agent", "Seller", "Buyer"]
          },
          last_active: null
        }
      ]);
    }).then(() => knex.raw(`ALTER SEQUENCE messages_id_seq RESTART WITH 2;`));
};