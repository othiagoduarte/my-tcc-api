module.exports = function(app)
{
	var Contato = app.models.contato;		
	var controller = {};

	controller.get = function(req, res) {	

		Contato.find().exec()
		.then(function(contatos){
			res.json(contatos);
		});

	};
 	
	controller.getAll = function(req, res) {

		Contato.find().exec()
		.then(function(contatos){
			res.json(contatos);
		});
			
	};
 	
	return controller;	
};