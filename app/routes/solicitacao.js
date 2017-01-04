module.exports = function(app)
{
	var controller = app.controllers.solicitacao;
	
	app.get('/solicitacao/:id',controller.get);
	app.get('/solicitacao', controller.getAll);
	app.get('/solicitacao',controller.save);
	app.get('/solicitacao',controller.update);
};