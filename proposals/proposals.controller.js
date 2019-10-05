const express = require('express');
const router = express.Router();
const proposalService = require('./proposal.service');

// routes
router.get('/get', get);
router.put('/submit', submit);
router.delete('/delete', _delete);

module.exports = router;

// GET

function get(req, res, next) {
    proposalService.get(req.params.attr)
        .then((data) => res.json(data))
        .catch(err => next(err));
}

// SUBMIT

function submit(req, res, next) {
    proposalService.submit(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

// DELETE

function _delete(req, res, next) {
    proposalService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}