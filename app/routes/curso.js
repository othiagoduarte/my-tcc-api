module.exports = function(app)
{
	var controller = app.controllers.curso;
	
	app.get('/curso/:id',controller.get);
	app.get('/curso', controller.getAll);
	app.get('/curso',controller.save);
	app.get('/curso',controller.update);
};