const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('home');
});
app.get('/contact', function (req, res) {
    res.render('contact');
});
app.listen(3000, function () {
    console.log('A peticion de Rocio: localhost:3000');
});