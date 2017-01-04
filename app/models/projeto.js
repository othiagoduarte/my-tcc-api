var mongoose = require('mongoose');

module.exports = function() {

    var schema = mongoose.Schema({  
        id_aluno: {
            type: String,
            required: true
        },
        id_professor: {
            type: String,
            required: true
        },
    });

    return mongoose.model('Projetos', schema);
};