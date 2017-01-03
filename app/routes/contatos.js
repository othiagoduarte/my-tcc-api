module.exports = function(app)
{
	var controller = app.controllers.contatos;
	
	app.get('/contatos/:id',controller.get);
	app.get('/contatos', controller.getAll);
	app.get('/contatos',controller.save);
	app.get('/contatos',controller.update);
};