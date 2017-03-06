var mongoose = require('mongoose');

module.exports = function() {

    var schema = mongoose.Schema({  
        titulo: {
            type: String,
        },
        resumo: {
            type: String,
        },
        problema: {
            type: String,
        },
        solucao: {
            type: String,
        },        
        aluno:{},
        professor:{}

    });

    return mongoose.model('Projetos', schema);
};