const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    dbUniqueReferenceNumber: { type: String, required: true, default: 0 },
    dbSupplierID: { type: String, required: true, default: 0 },
    dbContractReferenceNumber: { type: String, required: true, default: 0 },
    dbCostRequestReference: { type: String, required: true, default: 0 },
    dbUniqueBudgetline: { type: String, required: true, default: 0 },
    dbTotalContractValue_$: { type: Number, required: true, default: 0 },
    dbTotalContractValue_Local: { type: Number, required: true, default: 0 },
    dbVendorname: { type: String, required: true, default: 0 },
    dbContractDescription: { type: String, required: true, default: 0 },
    dbSpendCategory: { type: String, required: true, default: 0 },
    dbContractStartDate: { type: Date, required: true, default: 0 },
    dbContractEndDate: { type: Date, required: true, default: 0 },
    dbContractLengh_months: { type: Number, required: true, default: 0 },
    dbContractReviewdate: { type: Date, required: true, default: 0 },
    dbReviewNotes: { type: String, required: true, default: 0 },
    dbCountry: { type: String, required: true, default: 0 },
    dbDepartmentowningrelationship: { type: String, required: true, default: 0 },
    dbBusinessOwner: { type: String, required: true, default: 0 },
    dbProcurementLead: { type: String, required: true, default: 0 },
    dbITCostManagerLead: { type: String, required: true, default: 0 },
    dbY1: { type: Number, required: false, default: 0 },
    dbY2: { type: Number, required: false, default: 0 },
    dbY3: { type: Number, required: false, default: 0 },
    dbY4: { type: Number, required: false, default: 0 },
    dbY5: { type: Number, required: false, default: 0 },
    dbY6: { type: Number, required: false, default: 0 },
    dbY7: { type: Number, required: false, default: 0 },
    dbY8: { type: Number, required: false, default: 0 },
    dbY9: { type: Number, required: false, default: 0 }
}
);

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Contract', schema);