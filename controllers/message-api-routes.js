// Requiring models
var db = require("../models");

module.exports = app => {
    // Get route for getting all the messages 
    // Index of messages
    app.get("/api/messages", (req, res) => {
        var query = {};
        if (req.query.author_id) {
            query.AuthorId = req.query.author_id;
        }
        db.Message.findAll({
            where: query,
            include: [db.Author],
        }).then(dbMessage => {
            res.json(dbMessage);
        });
    });

    app.get("/api/messages/:id", (req, res) => {
        // Show single message in detail
        db.Message.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Author]
        }).then(dbMessage => {
            res.json(dbMessage);
        });
    });

    app.post("/api/messages", (req, res) => {
        // Create Message
        db.Message.create(req.body).then(dbMessage => {
            res.json(dbMessage);
        });
    });

    app.delete("/api/messages/:id", (req, res) => {
        db.Message.destroy({
            where: {
                id: req.params.id
            }
        }).then(dbMessage => {
            res.json(dbMessage);
        });
    });

    app.put("/api/messages", (req, res) => {
        db.Message.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(dbMessage => {
                res.json(dbMessage);
            });
    });
};