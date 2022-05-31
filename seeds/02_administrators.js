exports.seed = function (knex, Promise) {
  return knex('administrators').del()
    .then(function () {
      return knex('administrators').insert([
        {
          id: 1,
          user: 1,
          first_name: `Josh`,
          last_name: `Levy`,
          phone: 7208834980,
          managed_accounts: {
            companies: [1],
            agents: [1]
          },
          permissions: {
            companies: [`Write`],
            agents: [`Write`]
          }
        }
      ]);
    }).then(() => knex.raw(`ALTER SEQUENCE administrators_id_seq RESTART WITH 2;`));
};