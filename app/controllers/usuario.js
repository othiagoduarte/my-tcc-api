module.exports = function(app)
{
	var Usuario = app.models.usuario;		
	var controller = {};
	
	controller.getAll = getAll; /*BUSCAR TODOS*/ 
	controller.get = get; 		/*BUSCAR POR ID*/
	controller.update = update; /*ATUALIZAR POR ID*/
	controller.save = save;  	/*INSERIR NOVO*/

	function get (req, res) {	

		Usuario.find().exec()
		.then(function(contatos){
			res.json(contatos);
		});

	};
 	
	function getAll (req, res) {

		Usuario.find().exec()
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