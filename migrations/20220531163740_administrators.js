exports.up = function (knex, Promise) {
	return knex.schema.createTable('administrators', administrators => {
		administrators.increments();
		administrators.float('user', [0]);
		administrators.string('first_name');
		administrators.string('last_name');
		administrators.float('phone', [0]);
		administrators.jsonb('managed_accounts');
		administrators.jsonb('permissions');
	});
};

exports.down = function (knex, Promise) {
	return knex.schema.dropTableIfExists('administrators');
};