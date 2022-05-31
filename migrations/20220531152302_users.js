exports.up = function (knex, Promise) {
	return knex.schema.createTable('users', users => {
		users.increments();
		users.datetime('signup_date');
		users.string('status');
		users.string('email');
		users.string('username');
		users.jsonb('roles');
		users.datetime('last_active');
	});
};

exports.down = function (knex, Promise) {
	return knex.schema.dropTableIfExists('users');
};