module.exports = function(app)
{
	var Projeto = app.models.projeto;		
	var controller = {};
	
	controller.getAll = getAll; /*BUSCAR TODOS*/ 
	controller.get = get; 		/*BUSCAR POR ID*/
	controller.update = update; /*ATUALIZAR POR ID*/
	controller.save = save;  	/*INSERIR NOVO*/

	function get (req, res) {	


	};
 	
	function getAll (req, res) {

		Projeto.find().exec()
		.then(function(projetos){
			res.json(projetos);
		});
			
	};
	
	function update(req, res){

	};

	function save(req, res){
		
		var _projeto = req.body;

		Projeto.create(_projeto)
		.then(function(projetos) {
			res.status(201).json(projetos._doc);
		},
		function(erro) {
			res.status(501).json(erro);
			console.log(erro);
		});		
	}

	
	return controller;	
};