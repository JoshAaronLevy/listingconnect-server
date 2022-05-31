exports.up = function (knex, Promise) {
	return knex.schema.createTable('companies', companies => {
		companies.increments();
		companies.timestamp('signup_date');
		companies.string('status');
		companies.string('email');
		companies.string('username');
		companies.jsonb('roles');
		companies.timestamp('last_active');
	});
};

exports.down = function (knex, Promise) {
	return knex.schema.dropTableIfExists('companies');
};