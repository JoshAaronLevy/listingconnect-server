exports.up = function (knex, Promise) {
	return knex.schema.createTable('administrators', administrators => {
		administrators.increments();
		administrators.timestamp('signup_date');
		administrators.string('status');
		administrators.string('email');
		administrators.string('username');
		administrators.jsonb('roles');
		administrators.timestamp('last_active');
	});
};

exports.down = function (knex, Promise) {
	return knex.schema.dropTableIfExists('administrators');
};