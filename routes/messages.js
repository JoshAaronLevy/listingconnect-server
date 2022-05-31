const express = require('express');
const knex = require('../db-connection');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const router = module.exports = require('express').Router();

app.use(bodyParser.json());
app.use(cors());

router.get('/', getAll)
router.get('/:slug', getOne)
router.post('/', create)
router.put('/:id', update)
router.delete('/:id', remove)

function getAll(req, res, next) {
	knex('messages')
		.select('*')
		.then(messages => res.status(200).send({
			messages: messages
		}))
		.catch(next)
}

function getOne(req, res, next) {
	knex('messages')
		.select('*')
		.limit(1)
		.where({
			slug: req.params.slug
		})
		.then(([message]) => {
			if (!message) return res.status(404).send({
				message: 'Message not found.'
			})
			res.status(200).send({
				message: message
			})
		})
		.catch(next)
}

function create(req, res, next) {
	knex('messages')
		.insert(req.body)
		.then(() => res.status(201).json({
			message: req.body
		}))
		.catch(next)
}

function update(req, res, next) {
	knex('messages')
		.where({
			id: req.params.id
		})
		.update(req.body)
		.then(count => count >= 1 ?
			res.status(200).json({
				message: req.body
			}) :
			res.status(410).json())
		.catch(next)
}

function remove(req, res, next) {
	knex('messages')
		.where({
			id: req.params.id
		})
		.delete()
		.then(count => count >= 1 ?
			res.status(204).json() :
			res.status(404).json({
				message: 'Unable to delete message!'
			}))
		.catch(next)
}