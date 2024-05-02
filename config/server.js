const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const session = require('express-session');

app.set('views', './app/views');
app.set('view engine', 'ejs');
app.use(express.static('./app/public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(expressValidator());

app.use(session({
	secret: '123456mnbvcxsghjmmnbv',
	resave: true,
	saveUninitialized: false
}));

// Load controllers

const index = require('../app/routes/index.js');
const bairro = require('../app/routes/bairro.js');
const admin = require('../app/routes/administracao.js');
const efetuar_reclamacao = require('../app/routes/efetuar_reclamacao.js');
const favoritos = require('../app/routes/favoritos.js');
const login = require('../app/routes/login.js');
const ponto = require('../app/routes/ponto.js');
const reclamacao = require('../app/routes/reclamacoes.js');

// Carregamanto de rotas.
app.use('/', index);
app.use('/bairros', bairro);
app.use('/admin', admin);
app.use('/efetuar-reclamacao', efetuar_reclamacao);
app.use('/favoritos', favoritos);
app.use('/login', login);
app.use('/pontos', ponto);
app.use('/reclamacoes', reclamacao);

module.exports = app ;