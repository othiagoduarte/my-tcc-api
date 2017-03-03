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

		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		
		Aluno.find().exec()
		.then(function(alunos){
			res.status(204).jsonp(alunos);
		
		});
	};
	
	function update(req, res){

	};

	function save(req, res){

	}

	return controller;	
};