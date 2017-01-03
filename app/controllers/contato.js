module.exports = function(app)
{
	var Contato = app.models.contato;		
	var controller = {};
	
	controller.getAll = getAll; /*BUSCAR TODOS*/ 
	controller.get = get; 		/*BUSCAR POR ID*/
	controller.update = update; /*ATUALIZAR POR ID*/
	controller.save = save;  	/*INSERIR NOVO*/

	function get (req, res) {	

		Contato.find().exec()
		.then(function(contatos){
			res.json(contatos);
		});

	};
 	
	function getAll (req, res) {

		Contato.find().exec()
		.then(function(contatos){
			res.json(contatos);
		});
			
	};
	
	function update(req, res){

	};

	function save(req, res){

	}

	return controller;	
};