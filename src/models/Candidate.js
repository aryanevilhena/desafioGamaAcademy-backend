const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    name: { type: String, unique: false, required: true },
    role: { type: String, unique: false, required: false },
    birthDate: { type: String, unique: false, required: true },
    maritalStatus: { type: String, unique: false, required: false },
    gender: { type: String, unique: false, required: false },
    cep: { type: Number, unique: false, required: true },
    address: { type: String, unique: false, required: true },
    district: { type: String, unique: false, required: true },
    city: { type: String, unique: false, required: true },
    number: { type: Number, unique: true, required: true },
    complement: {type: String, unique: false, required: false },
    phone1: { type: Number, unique: false, required: false },
    phone2: { type: Number, unique: false, required: false },
    cellPhone: { type: Number, unique: true, required: true },
    contact: { type: String, unique: false, required: false },
    email: { type: String, unique: true, required: true },
    
    rg: { type: Number, unique: true, required: false },
    cpf: { type: Number, unique: true, required: true },
    hasVehicle: { type: String, unique: false, required: false },
    license: { type: String, unique: false, required: false },
}, {
    timestamps: true
    // created_at , updated_at
});

module.exports = mongoose.model('Candidate', CandidateSchema);