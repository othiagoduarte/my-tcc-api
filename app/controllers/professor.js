module.exports = function(app)
{
	var Professor = app.models.professor;		
	var controller = {};
	
	controller.getAll = getAll; /*BUSCAR TODOS*/ 
	controller.get = get; 		/*BUSCAR POR ID*/
	controller.update = update; /*ATUALIZAR POR ID*/
	controller.save = save;  	/*INSERIR NOVO*/

	function get (req, res) {	


	};
 	
	function getAll (req, res) {

		Professor.find().exec()
		.then(function(professores){
			res.json(professores);
		});
			
	};
	
	function update(req, res){

	};

	function save(req, res){

	}

	return controller;	
};