// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
// var path = require("path");
// Routes
// =============================================================
module.exports = function (app) {
	app.get("/policy", function (req, res) {
		res.render('policy');
	})

	app.get("/house_manual", function (req, res) {
		res.render('house_manual');
	})
	app.get("/local_guide", function (req, res) {
		res.render('local_guide');
	})

	app.get("/contact", function (req, res) {
		res.render('contact');
	})

	app.get("/6192290143/messages", function (req, res) {
		res.render('messages');
	})

	app.get("/", function (req, res) {
		res.render('home');
	})
	app.get("*", function (req, res) {
		res.render('home');
	})

	// POST route from contact form
	// app.post('/index', function (req, res) {
	// 	let mailOpts, smtpTrans;
	// 	smtpTrans = nodemailer.createTransport({
	// 		host: 'smtp.gmail.com',
	// 		port: 465,
	// 		secure: true,
	// 		auth: {
	// 			user: GMAIL_USER,
	// 			pass: GMAIL_PASS
	// 		}
	// 	});
	// 	mailOpts = {
	// 		from: req.body.name + ' &lt;' + req.body.email + '&gt;',
	// 		to: GMAIL_USER,
	// 		subject: 'New message from contact form at guide-san-diego',
	// 		text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
	// 	};
	// 	smtpTrans.sendMail(mailOpts, function (error, response) {
	// 		if (error) {
	// 			res.render('contact-failure');
	// 		}
	// 		else {
	// 			res.render('contact-success');
	// 		}
	// 	});
	// });
}
