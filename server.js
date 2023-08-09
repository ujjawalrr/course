const express = require('express');
const app = express();

app.set('view engine', 'ejs');

const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: 'true' }));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('index');
})
app.get('/login', (req, res) => {
    res.render('login');
})
app.get('/register', (req, res) => {
    res.render('register');
})
app.get('/contact', (req, res) => {
    res.render('contact');
})
app.get('/privacy', (req, res) => {
    res.render('privacyPolicy');
})
app.get('/terms', (req, res) => {
    res.render('terms');
})
app.get('/carousel', (req, res) => {
    res.render('carousel');
})

app.listen(port, () => {
    console.log('listening');
})