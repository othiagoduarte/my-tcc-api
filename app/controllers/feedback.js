module.exports = function(app)
{
	var Feedback = app.models.feedback;		
	var controller = {};
	
	controller.getAll = getAll; /*BUSCAR TODOS*/ 
	controller.get = get; 		/*BUSCAR POR ID*/
	controller.update = update; /*ATUALIZAR POR ID*/
	controller.save = save;  	/*INSERIR NOVO*/

	function get (req, res) {	


	};
 	
	function getAll (req, res) {

		Feedback.find().exec()
		.then(function(feedbacks){
			res.json(feedbacks);
		});
			
	};
	
	function update(req, res){

	};

	function save(req, res){

	}

	return controller;	
};