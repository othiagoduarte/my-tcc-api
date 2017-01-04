module.exports = function(app)
{
	var Tarefa = app.models.tarefa;		
	var controller = {};
	
	controller.getAll = getAll; /*BUSCAR TODOS*/ 
	controller.get = get; 		/*BUSCAR POR ID*/
	controller.update = update; /*ATUALIZAR POR ID*/
	controller.save = save;  	/*INSERIR NOVO*/

	function get (req, res) {	


	};
 	
	function getAll (req, res) {

		Tarefa.find().exec()
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