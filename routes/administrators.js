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
	knex('administrators')
		.select('*')
		.then(administrators => res.status(200).send({
			administrators: administrators
		}))
		.catch(next)
}

function getOne(req, res, next) {
	knex('administrators')
		.select('*')
		.limit(1)
		.where({
			slug: req.params.slug
		})
		.then(([administrator]) => {
			if (!administrator) return res.status(404).send({
				message: 'Administrator not found.'
			})
			res.status(200).send({
				administrator: administrator
			})
		})
		.catch(next)
}

function create(req, res, next) {
	knex('administrators')
		.insert(req.body)
		.then(() => res.status(201).json({
			administrator: req.body
		}))
		.catch(next)
}

function update(req, res, next) {
	knex('administrators')
		.where({
			id: req.params.id
		})
		.update(req.body)
		.then(count => count >= 1 ?
			res.status(200).json({
				administrator: req.body
			}) :
			res.status(410).json())
		.catch(next)
}

function remove(req, res, next) {
	knex('administrators')
		.where({
			id: req.params.id
		})
		.delete()
		.then(count => count >= 1 ?
			res.status(204).json() :
			res.status(404).json({
				message: 'Unable to delete administrator!'
			}))
		.catch(next)
}