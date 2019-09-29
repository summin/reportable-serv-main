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
    // validate
    if (await Proposal.findOne({ ID: proposalParam.proposalID })) {
        throw 'Proposal"' + proposalParam.proposalID + '" has already been submitted';
    }

    const proposal = new Proposal(proposalParam);

    // save user
    await proposal.save();
}
