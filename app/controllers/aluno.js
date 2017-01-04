module.exports = function(app)
{
	var Aluno = app.models.aluno;		
	var controller = {};
	
	controller.getAll = getAll; /*BUSCAR TODOS*/ 
	controller.get = get; 		/*BUSCAR POR ID*/
	controller.update = update; /*ATUALIZAR POR ID*/
	controller.save = save;  	/*INSERIR NOVO*/

	function get (req, res) {	


	};
 	
	function getAll (req, res) {

		Aluno.find().exec()
		.then(function(alunos){
			res.json(alunos);
		});
			
	};
	
	function update(req, res){

	};

	function save(req, res){

	}

	return controller;	
};