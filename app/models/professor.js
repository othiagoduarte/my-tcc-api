var mongoose = require('mongoose');

module.exports = function() {

    var schema = mongoose.Schema({  
        nome: {
            type: String,
            required: true
        },
        apresentacao:  {
            type: String,
            
        },
        id_usuario :{
            type: String
        },
    });

    return mongoose.model('Professores', schema);
};