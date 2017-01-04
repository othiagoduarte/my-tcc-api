module.exports = function(app)
{
	var controller = app.controllers.aluno;
	
	app.get('/aluno/:id',controller.get);
	app.get('/aluno', controller.getAll);
	app.get('/aluno',controller.save);
	app.get('/aluno',controller.update);
};