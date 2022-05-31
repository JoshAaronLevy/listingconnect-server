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
	knex('buyers')
		.select('*')
		.then(buyers => res.status(200).send({
			buyers: buyers
		}))
		.catch(next)
}

function getOne(req, res, next) {
	knex('buyers')
		.select('*')
		.limit(1)
		.where({
			slug: req.params.slug
		})
		.then(([buyer]) => {
			if (!buyer) return res.status(404).send({
				message: 'Buyer not found.'
			})
			res.status(200).send({
				buyer: buyer
			})
		})
		.catch(next)
}

function create(req, res, next) {
	knex('buyers')
		.insert(req.body)
		.then(() => res.status(201).json({
			buyer: req.body
		}))
		.catch(next)
}

function update(req, res, next) {
	knex('buyers')
		.where({
			id: req.params.id
		})
		.update(req.body)
		.then(count => count >= 1 ?
			res.status(200).json({
				buyer: req.body
			}) :
			res.status(410).json())
		.catch(next)
}

function remove(req, res, next) {
	knex('buyers')
		.where({
			id: req.params.id
		})
		.delete()
		.then(count => count >= 1 ?
			res.status(204).json() :
			res.status(404).json({
				message: 'Unable to delete buyer!'
			}))
		.catch(next)
}