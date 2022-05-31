exports.up = function (knex, Promise) {
	return knex.schema.createTable('agents', agents => {
		agents.increments();
		agents.timestamp('signup_date');
		agents.string('status');
		agents.string('email');
		agents.string('username');
		agents.jsonb('roles');
		agents.timestamp('last_active');
	});
};

exports.down = function (knex, Promise) {
	return knex.schema.dropTableIfExists('agents');
};