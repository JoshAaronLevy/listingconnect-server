const database = require('../db-connection');

module.exports = {
	list() {
		return database('administrators').select();
	},
	read(id) {
		return database('administrators').select().where('id', id).first();
	},
	create(id) {
		return database('administrators')
			.insert()
			.where('id', id)
			.returning('*')
			.then(record => record[0]);
	},
	update(id) {
		return database('administrators')
			.update()
			.where('id', id)
			.returning('*')
			.then(record => record[0]);
	},
	delete(id) {
		return database('administrators').delete().where('id', id);
	}
};