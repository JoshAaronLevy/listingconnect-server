const database = require('../db-connection');

module.exports = {
	list() {
		return database('users').select();
	},
	read(id) {
		return database('users').select().where('id', id).first();
	},
	create(id) {
		return database('users')
			.insert()
			.where('id', id)
			.returning('*')
			.then(record => record[0]);
	},
	update(id) {
		return database('users')
			.update()
			.where('id', id)
			.returning('*')
			.then(record => record[0]);
	},
	delete(id) {
		return database('users').delete().where('id', id);
	}
};