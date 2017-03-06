module.exports = function(app)
{
	var controller = app.controllers.skill;
	
	app.route('/skill')
	.get(controller.getAll)
	.post(controller.save)
	.put(controller.update);

	app.route('/skill/:id')
	.get(controller.get);
};