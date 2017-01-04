module.exports = function(app)
{
	var controller = app.controllers.entrega;
	
	app.get('/entrega/:id',controller.get);
	app.get('/entrega', controller.getAll);
	app.get('/entrega',controller.save);
	app.get('/entrega',controller.update);
};