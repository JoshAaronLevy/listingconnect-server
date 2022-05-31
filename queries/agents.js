const database = require('../db-connection');

module.exports = {
	list() {
		return database('agents').select();
	},
	read(id) {
		return database('agents').select().where('id', id).first();
	},
	create(id) {
		return database('agents')
			.insert()
			.where('id', id)
			.returning('*')
			.then(record => record[0]);
	},
	update(id) {
		return database('agents')
			.update()
			.where('id', id)
			.returning('*')
			.then(record => record[0]);
	},
	delete(id) {
		return database('agents').delete().where('id', id);
	}
};