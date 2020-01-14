const express = require('express');
const router = express.Router();
const contractService = require('./contract.service');

// routes
router.post('', submit)
router.get('/', getAll);
router.get('/:field=:value', getByAttr);
router.get('/:id', getByID);
router.put('/:id', modify);
router.delete('/:id', _delete);

module.exports = router;

function submit(req, res, next) {
    contractService.submit(req.body)
        .then((data) => res.json(data))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    contractService.getAll(req.params.attr)
        .then((data) => res.json(data))
        .catch(err => next(err));
}

function getByID(req, res, next) {
    contractService.getByID(req.params.id)
        .then((data) => res.json(data))
        .catch(err => next(err));
}

function getByAttr(req, res, next) {

    contractService.getByAttr(req.params)
        .then((data) => res.json(data))
        .catch(err => next(err));
}

function modify(req, res, next) {
    contractService.modify(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    contractService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}