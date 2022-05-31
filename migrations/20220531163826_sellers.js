exports.up = function (knex, Promise) {
	return knex.schema.createTable('sellers', sellers => {
		sellers.increments();
		sellers.timestamp('signup_date');
		sellers.string('status');
		sellers.string('email');
		sellers.string('username');
		sellers.jsonb('roles');
		sellers.timestamp('last_active');
	});
};

exports.down = function (knex, Promise) {
	return knex.schema.dropTableIfExists('sellers');
};