var mongoose = require('mongoose');

module.exports = function() {

    var schema = mongoose.Schema({  
        nome: {
            type: String,
            required: true
        },
        matricula:  {
            type: String,
            required: true
        },
        apresentacao:  {
            type: String
        },
        id_usuario :{
            type: String,
            required: true
        },
    });

    return mongoose.model('Alunos', schema);
};