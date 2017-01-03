module.exports = function(app)
{
	var controller = app.controllers.contato;

	app.get('/contato', controller.getAll);
	app.get('/contato/:id',controller.get);

};