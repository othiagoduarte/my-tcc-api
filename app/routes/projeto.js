module.exports = function(app)
{
	var controller = app.controllers.projeto;
	
	app.get('/projeto/:id',controller.get);
	app.get('/projeto', controller.getAll);
	app.get('/projeto',controller.save);
	app.get('/projeto',controller.update);
};