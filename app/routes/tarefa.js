module.exports = function(app)
{
	var controller = app.controllers.tarefa;
	
	app.get('/tarefa/:id',controller.get);
	app.get('/tarefa', controller.getAll);
	app.get('/tarefa',controller.save);
	app.get('/tarefa',controller.update);
};