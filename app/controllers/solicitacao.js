module.exports = function(app)
{
	var Solicitacao = app.models.solicitacao;		
	var controller = {};
	
	controller.getAll = getAll; /*BUSCAR TODOS*/ 
	controller.get = get; 		/*BUSCAR POR ID*/
	controller.save = save; /*ATUALIZAR POR ID*/
	controller.add = add;  	/*INSERIR NOVO*/

	function get (req, res) {	


	};
 	
	function getAll (req, res) {

		Solicitacao.find().exec()
		.then(function(data){
			res.json(data);
		});
			
	};
	
	function save(req, res){

	};

	function add(req, res){
		
		var _solicitacao = req.body;

		Solicitacao.create(_solicitacao)
		.then(function(solicitacoes) {
			res.status(201).json(solicitacoes._doc);
		},
		function(erro) {
			console.log(erro);
			res.status(501).json(erro.message);
		});
	}

	return controller;	
};