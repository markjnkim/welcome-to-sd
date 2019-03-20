// Requiring models
var db = require("../models");
// var moment = require("moment");

module.exports = app => {
	// Get route for getting all the messages from an author
	// Index of messages
	app.get("/api/messages", (req, res) => {
		var query = {};
		// console.log(res);
		db.Message.findAll({
			// include: [db.Author]
		})
			.then(dbMessage => {
				res.json(dbMessage);
			});

		// if (req.query.author_id) {
		// 	query.AuthorId = req.query.author_id;
		// }
		// db.Message.findAll({
		// 	where: query,
		// 	include: [db.Author],
		// }).then(function(dbMessage) {
		// 	res.json(dbMessage);
		// });
	});

	app.get("/api/messages/:id", (req, res) => {
		// Show single message in detail
		db.Message
			.findOne({
				where: {
					id: req.params.id
				}
			})
			.then(dbMessage => {
				res.json(dbMessage);
			});
	});


	app.post("/api/messages", (req, res) => {
		// Create Message
		db.Message
			.create(req.body)
			.then(dbMessage => {
				res.json(dbMessage);
			});
	});


	app.delete("/api/messages/:id", (req, res) => {
		return db.Message
			.findById(req.params.id)
			.then(message => {
				message.destroy()
				// console.log("____________---------------________________");
				// req.request = "GET";
				// res.send("hello world");
				res.sendStatus(200);
				// res.redirect(303, "/");
			})
			.catch(err => res.status(422).json(err));
	})

	app.put("/api/messages", (req, res) => {
		return db.Message.update(
			req.body,
			{
				where: {
					id: req.body.id
				}
			}).then(dbMessage => {
				res.json(dbMessage);
			});
	});

}