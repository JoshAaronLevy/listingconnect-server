const database = require('../db-connection');

module.exports = {
	list() {
		return database('sellers').select();
	},
	read(id) {
		return database('sellers').select().where('id', id).first();
	},
	create(id) {
		return database('sellers')
			.insert()
			.where('id', id)
			.returning('*')
			.then(record => record[0]);
	},
	update(id) {
		return database('sellers')
			.update()
			.where('id', id)
			.returning('*')
			.then(record => record[0]);
	},
	delete(id) {
		return database('sellers').delete().where('id', id);
	}
};