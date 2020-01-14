const db = require('_helpers/db');
const Contract = db.Contract;

module.exports = {
    submit,
    getByID,
    getAll,
    getByAttr,
    modify,
    _delete
};

async function submit(contractParam) {
    const contract = new Contract(contractParam);
    await contract.save()
}

async function getByID(id) {
    return await Contract.find({_id: id})
}

async function getAll() {
    return await Contract.find().sort({ createdDate: 'desc' })
}

async function getByAttr(attr) {
    return await Contract.find({[attr.field]: attr.value})
}


async function modify(id, contractParam) {
    const contract = await Contract.findById(id);
    if (!contract ) throw 'Contract not found';
    Object.assign(contract, contractParam);
    await contract.save();
}

async function _delete(attr) {
    return await Contract.find({ dbcreatedDate: { $gt: new Date('2019-10-03T13:24:00') } });
}