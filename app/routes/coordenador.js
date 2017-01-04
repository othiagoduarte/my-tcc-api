module.exports = function(app)
{
	var controller = app.controllers.coordenador;
	
	app.get('/coordenador/:id',controller.get);
	app.get('/coordenador', controller.getAll);
	app.get('/coordenador',controller.save);
	app.get('/coordenador',controller.update);
};