const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const Proposal = db.Proposal;

module.exports = {
    submit,
    get
};

// GET

async function get(attr) {
    return await Proposal.find( { dbcreatedDate: { $gt: new Date('2019-10-03T13:24:00') } } );
}

// SUBMIT

async function submit(proposalParam) {

    if (await Proposal.findOne({ dbContractReferenceNumber: proposalParam.dbContractReferenceNumber })) {
        throw 'Proposal"' + proposalParam.dbContractReferenceNumber + '" has already been submitted';
    }

    const proposal = new Proposal(proposalParam);

    await proposal.save();
}
