module.exports = function(app)
{
	var Contatos = app.models.contatos;		
	var controller = {};
	
	controller.getAll = getAll; /*BUSCAR TODOS*/ 
	controller.get = get; 		/*BUSCAR POR ID*/
	controller.update = update; /*ATUALIZAR POR ID*/
	controller.save = save;  	/*INSERIR NOVO*/

	function get (req, res) {	

		Contatos.find().exec()
		.then(function(contatos){
			res.json(contatos);
		});

	};
 	
	function getAll (req, res) {

		Contatos.find().exec()
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