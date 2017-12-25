var express = require('express');
var bodyParser = require('body-parser');
var ejsLayouts = require('express-ejs-layouts');
var app = express();

//Set and Use statements to set up middleware
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(ejsLayouts);
app.use(express.static(__dirname + '/public/'));

//Controllers
app.use('/articles', require('./controllers/articles'));

//Routes
app.get('/', function(req, res) {
  res.render('site/home.ejs');
});

//Listen on port 3000
app.listen(3000)
