const express = require('express');
const router = express.Router();
const proposalService = require('./proposal.service');

// routes
router.post('/:id', getById);
router.put('/submit', register);
router.delete('/delete', _delete);

module.exports = router;

function getById(req, res, next) {
    proposalService.getById(req.params.id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}

function register(req, res, next) {
    proposalService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    proposalService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}