exports.up = function (knex, Promise) {
	return knex.schema.createTable('messages', messages => {
		messages.increments();
		messages.timestamp('signup_date');
		messages.string('status');
		messages.string('email');
		messages.string('username');
		messages.jsonb('roles');
		messages.timestamp('last_active');
	});
};

exports.down = function (knex, Promise) {
	return knex.schema.dropTableIfExists('messages');
};