const express = require('express');
const app = express();
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const session = require('express-session');

app.listen(3000, function(){
  console.log("rodando na porta 3000.");
});

app.set('views','./app/views');
app.set('view engine', 'ejs');	
app.use(express.static('./app/public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(expressValidator());

app.use(session({
  secret: '123456mnbvcxsghjmmnbv',
   resave: true,
   saveUninitialized:false
}));

consign()
	.include('app/routes')
	.then('app/models')
	.then('app/controllers')
	.then('config/connect_banco.js')
	.into(app);

module.exports = {app};