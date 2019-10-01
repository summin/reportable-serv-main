const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const Proposal = db.Proposal;

module.exports = {
    create
};

async function getById(id) {
    return await User.findById(id).select('-hash');
}

async function create(proposalParam) {
    console.log("dbproposal")
    // validate
    if (await Proposal.findOne({ dbContractReferenceNumber: proposalParam.dbContractReferenceNumber })) {
        throw 'Proposal"' + proposalParam.dbContractReferenceNumber + '" has already been submitted';
    }

    const proposal = new Proposal(proposalParam);

    await proposal.save();
}
