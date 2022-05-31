const database = require('../db-connection');

module.exports = {
	list() {
		return database('messages').select();
	},
	read(id) {
		return database('messages').select().where('id', id).first();
	},
	create(id) {
		return database('messages')
			.insert()
			.where('id', id)
			.returning('*')
			.then(record => record[0]);
	},
	update(id) {
		return database('messages')
			.update()
			.where('id', id)
			.returning('*')
			.then(record => record[0]);
	},
	delete(id) {
		return database('messages').delete().where('id', id);
	}
};