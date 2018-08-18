# Airbnb house guide 
![home page gif](/assets/images/homepage.gif)


A mobile responsive full stack website that assists Airbnb guests to utilize house amenities, understand house policies, and guide to local hot spots.
This provides an ability to have an incredible amount of information readily available to your guests.
This is a full stack node.js app that employees mysql, and express along with Materialize, jQuery, javascript and css on the front end.
Here are some screen shots of the use of Materialize components and jQuery methods.

![local guide gif](/assets/images/localguide.gif)


#### Mobile responsive design allows complete use of the website on any cell phone or tablet.


![mobile gif](/assets/images/mobileresponsive.gif)

## Demo
To view the deployed site please click [here](http://guide-san-diego.herokuapp.com/) 

## Getting Started
![Build Status](https://travis-ci.org/dwyl/esta.svg?branch=master)

## How to run this app on a local server

Clone the repo

Open the project's root directory

```
cd welcome-to-sd
```

Use npm to install package dependencies

```
npm install
```

Start the local server

```
nodemon server
```

That's it, now the app should be running on <http://localhost:8000>. 



## Dependencies
* npm - [![npm version](https://badge.fury.io/js/npm.svg)](https://badge.fury.io/js/npm)
* express    -        [![npm version](https://badge.fury.io/js/express.svg)](https://badge.fury.io/js/express)
* express-handlebars - [![npm version](https://badge.fury.io/js/express-handlebars.svg)](https://badge.fury.io/js/express-handlebars)
* mysql2 -              [![npm version](https://badge.fury.io/js/mysql2.svg)](https://badge.fury.io/js/mysql2)
* body-parser  -       [![npm version](https://badge.fury.io/js/body-parser.svg)](https://badge.fury.io/js/body-parser)
* sequelize     -     [![npm version](https://badge.fury.io/js/sequelize.svg)](https://badge.fury.io/js/sequelize)
* sequelize-cli  -    [![npm version](https://badge.fury.io/js/sequelize-cli.svg)](https://badge.fury.io/js/sequelize-cli)

#### mysql is used to store communication from guests from the contact page

![contact gif](/assets/images/contact_pg.gif)


## Built With

* [Express](http://www.dropwizard.io/1.0.2/docs/) - Router
* [mysql](https://mysql.com) - Database
* [Materialize](https://materialize.css.com/) - CSS Framework
* [jQuery](https://jquery.com/) - Javascript Library


## Deployment (Heroku)

### Create a Git Repo

Once you're ready to deploy, start by making sure your project is a git repository. If so, proceed to the next section, otherwise run the following commands in your terminal:

```
git init
git add .
git commit -m "Initial commit"
```

### Heroku

Make sure that you have a Heroku app created for this project. If so, proceed to the next section, otherwise run the following command in your terminal:

```
heroku create
```

Optionally add an argument for your application's name after `create`, e.g.

```
heroku create myApp
```

### Deploying


After confirming that you have an up to date git repository and a Heroku app created, run the following command to link up the remote and push to heroku:
```
git push heroku master
```
That's it, now your app should be deployed to your app's name at
```
myApp.herokuapp.com
```
## Contributing
@SwarnaKishore for Materialize Parallax template

## Authors

***Mark Kim*** - [*more work*](https://github.com/markjnkim)


## License

This project is licensed under the MIT License 
