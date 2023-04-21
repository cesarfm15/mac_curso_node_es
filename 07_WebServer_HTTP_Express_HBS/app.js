// FROM class 88
require('dotenv').config();
const express = require('express');
const hbs = require('hbs');
const app = express();

const port = process.env.PORT;


//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

//Middleware: Servimos contenido estatico
app.use(express.static('public'));






app.get('/', function (req, res) {
  res.render('home', {
    nombre: 'César Flores',
    titulo: 'NodeJS Practice'
  })
});

app.get('/generic', function (req, res) {
    // res.sendFile(__dirname+'/public/generic.html');

    res.render('generic');
});

app.get('/elements', function (req, res) {
    // res.sendFile(__dirname+'/public/elements.html');

    res.render('elements');
});

app.get('*', (req,res) => {
    // res.send('404|NotFound');
    res.sendFile(__dirname+'/public/404.html');
});




app.listen(port, function () {
    console.log(`07_WebServer_HTTP_Express_HBS listening at port ${port}`);
})