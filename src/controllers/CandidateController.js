const Candidate = require('../models/Candidate');

module.exports = {
    async register(req, res) {
        const { name, role, birthDate, maritalStatus, gender,
            cep, address, district, city, number, complement, 
            phone1, phone2, cellPhone, contact, email,
            rg, cpf, hasVehicle, license } = req.body;

        const newCandidate = new Candidate();

        newCandidate.name = name;
        newCandidate.role = role;
        newCandidate.birthDate = birthDate;
        newCandidate.maritalStatus = maritalStatus;
        newCandidate.gender = gender;
        newCandidate.cep = cep;
        newCandidate.address = address;
        newCandidate.district = district;
        newCandidate.city = city;
        newCandidate.number = number;
        newCandidate.complement = complement;
        newCandidate.phone1 = phone1;
        newCandidate.phone2 = phone2;
        newCandidate.cellPhone = cellPhone;
        newCandidate.contact = contact;
        newCandidate.email = email;
        newCandidate.rg = rg;
        newCandidate.cpf = cpf;
        newCandidate.hasVehicle = hasVehicle;
        newCandidate.license = license;

        newCandidate.save((err, savedCandidate) => {
            if(err){
                console.log(err);
                return res.status(500).send('Erro no CandidateControllers');
            }

            return res.status(200).send(savedCandidate);
        });
    },

};