module.exports = function(app)
{
	var controller = app.controllers.professor;
	
	app.get('/professor', controller.getAll);
	app.post('/professor',controller.add);
};