const database = require('../db-connection');

module.exports = {
	list() {
		return database('companies').select();
	},
	read(id) {
		return database('companies').select().where('id', id).first();
	},
	create(id) {
		return database('companies')
			.insert()
			.where('id', id)
			.returning('*')
			.then(record => record[0]);
	},
	update(id) {
		return database('companies')
			.update()
			.where('id', id)
			.returning('*')
			.then(record => record[0]);
	},
	delete(id) {
		return database('companies').delete().where('id', id);
	}
};