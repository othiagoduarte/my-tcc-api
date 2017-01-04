module.exports = function(app)
{
	var controller = app.controllers.professor;
	
	app.get('/professor/:id',controller.get);
	app.get('/professor', controller.getAll);
	app.get('/professor',controller.save);
	app.get('/professor',controller.update);
};