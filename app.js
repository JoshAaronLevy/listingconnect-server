const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = parseInt(process.env.PORT || 8080);

const users = require('./routes/users');
const agents = require('./routes/agents');
const sellers = require('./routes/sellers');
const buyers = require('./routes/buyers');
const messages = require('./routes/messages');

app.use(bodyParser.json());
app.use(cors());

app.use('/users', users);
app.use('/agents', agents);
app.use('/sellers', sellers);
app.use('/buyers', buyers);
app.use('/messages', messages);

// Default route
app.get("/", (req, res) => {
	// Design a default home page and render it
	res.send("ListingConnect API");
});

app.use((req, res, next) => {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
});

app.use((err, req, res, next) => {
	res.status(err.status || 500);
	res.json({
		message: err.message,
		error: req.app.get('env') === 'development' ? err.stack : {}
	});
});

module.exports = app;

app.listen(port)
	.on('error', console.error.bind(console))
	.on('listening', console.log.bind(console, `Listening on http://localhost:${port}`));