// Requiring models
var db = require("../models");

module.exports = function(app) {
	// Get route for getting all the messages from an author
	// Index of messages
	app.get("/api/messages", function(req, res) {
		var query = {};
		console.log(res);
		if (req.query.author_id) {
			query.AuthorId = req.query.author_id;
		}
		db.Message.findAll({
			where: query,
			include: [db.Author],
		}).then(function(dbMessage) {
			res.json(dbMessage);
		});
	});

	app.get("/api/messages/:id", function(req, res) {
		// Show single message in detail
		db.Message.findOne({
			where: {
				id: req.params.id
			},
			include: [db.Author]
		}).then(function(dbMessage) {
			res.json(dbMessage);
		});
	});

	app.post("/api/messages", function(req, res) {
		// Create Message
		db.Message.create(req.body).then( function(dbMessage) {
			res.json(dbMessage);
		});
	});

	app.delete("/api/messages/:id", function(req, res) {
		db.Message.destroy({
			where: {
				id: req.params.id
			}
		}).then(function(dbMessage) {
			res.json(dbMessage);
		});
	});

	app.put("/api/messages", function(req, res) {
		db.Message.update(
			req.body,
			{
				where: {
					id: req.body.id
				}
			}).then(function(dbMessage) {
				res.json(dbMessage);
			});
	});
};