const database = require('../db-connection');

module.exports = {
	list() {
		return database('buyers').select();
	},
	read(id) {
		return database('buyers').select().where('id', id).first();
	},
	create(id) {
		return database('buyers')
			.insert()
			.where('id', id)
			.returning('*')
			.then(record => record[0]);
	},
	update(id) {
		return database('buyers')
			.update()
			.where('id', id)
			.returning('*')
			.then(record => record[0]);
	},
	delete(id) {
		return database('buyers').delete().where('id', id);
	}
};