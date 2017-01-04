module.exports = function(app)
{
	var Orientacao = app.models.orientacao;		
	var controller = {};
	
	controller.getAll = getAll; /*BUSCAR TODOS*/ 
	controller.get = get; 		/*BUSCAR POR ID*/
	controller.update = update; /*ATUALIZAR POR ID*/
	controller.save = save;  	/*INSERIR NOVO*/

	function get (req, res) {	


	};
 	
	function getAll (req, res) {

		Orientacao.find().exec()
		.then(function(orientacoes){
			res.json(orientacoes);
		});
			
	};
	
	function update(req, res){

	};

	function save(req, res){

	}

	return controller;	
};