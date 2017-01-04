module.exports = function(app)
{
	var Coordenador = app.models.coordenador;		
	var controller = {};
	
	controller.getAll = getAll; /*BUSCAR TODOS*/ 
	controller.get = get; 		/*BUSCAR POR ID*/
	controller.update = update; /*ATUALIZAR POR ID*/
	controller.save = save;  	/*INSERIR NOVO*/

	function get (req, res) {	


	};
 	
	function getAll (req, res) {

		Coordenador.find().exec()
		.then(function(data){
			res.json(data);
		});
			
	};
	
	function update(req, res){

	};

	function save(req, res){

	}

	return controller;	
};