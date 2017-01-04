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
        data: {
            type: String,
            required: true
        },
        titulo: {
            type: String,
            required: true
        },
        mensagem: {
            type: String,
            required: true
        },
        resposta: {
            type: String,
            required: true
        },
    });

    return mongoose.model('Solicitacoes', schema);
};