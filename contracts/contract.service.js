const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const Contract = db.Contract;

module.exports = {
    submit,
    get
};

// GET

async function get(attr) {
    return await Contract.find();
}

// SUBMIT

async function submit(contractParam) {

    if (await Contract.findOne({ dbContractReferenceNumber: contractParam.dbContractReferenceNumber })) {
        throw 'Proposal"' + contractParam.dbContractReferenceNumber + '" has already been submitted';
    }

    const contract = new Contract(contractParam);

    await contract.save();
}
