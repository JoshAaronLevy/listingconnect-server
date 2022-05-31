exports.up = function (knex, Promise) {
	return knex.schema.createTable('buyers', buyers => {
		buyers.increments();
		buyers.timestamp('signup_date');
		buyers.string('status');
		buyers.string('email');
		buyers.string('username');
		buyers.jsonb('roles');
		buyers.timestamp('last_active');
	});
};

exports.down = function (knex, Promise) {
	return knex.schema.dropTableIfExists('buyers');
};