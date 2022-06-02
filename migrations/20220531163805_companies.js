exports.up = function (knex, Promise) {
	return knex.schema.createTable('companies', companies => {
		companies.increments();
		companies.timestamp('created_date');
		companies.string('name');
		companies.float('parent', [0]);
		companies.string('username');
		companies.jsonb('roles');
		companies.timestamp('last_updated');
	});
};

exports.down = function (knex, Promise) {
	return knex.schema.dropTableIfExists('companies');
};