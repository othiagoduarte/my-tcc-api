module.exports = function(app)
{
	var Entrega = app.models.entrega;		
	var controller = {};
	
	controller.getAll = getAll; /*BUSCAR TODOS*/ 
	controller.get = get; 		/*BUSCAR POR ID*/
	controller.update = update; /*ATUALIZAR POR ID*/
	controller.save = save;  	/*INSERIR NOVO*/

	function get (req, res) {	


	};
 	
	function getAll (req, res) {

		Entrega.find().exec()
		.then(function(entregas){
			res.json(entregas);
		});
			
	};
	
	function update(req, res){

	};

	function save(req, res){

	}

	return controller;	
};