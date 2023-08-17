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
app.get('/forgotPassword', (req, res) => {
    res.render('forgotPassword');
})
app.get('/resetPassword', (req, res) => {
    res.render('resetPassword');
})
app.get('/emailVerified', (req, res) => {
    res.render('emailVerified');
})
app.get('/emailUnverified', (req, res) => {
    res.render('emailUnverified');
})
app.get('/profile', (req, res) => {
    res.render('profile');
})
app.get('/updateProfile', (req, res) => {
    res.render('updateProfile');
})
app.get('/privacyPolicy', (req, res) => {
    res.render('privacyPolicy');
})
app.get('/terms', (req, res) => {
    res.render('terms');
})
app.get('/contact', (req, res) => {
    res.render('contact');
})
app.get('/confirmation20', (req, res) => {
    res.render('confirmation20');
})
app.get('/confirmationCall', (req, res) => {
    res.render('confirmationCall');
})
app.get('/allCourses', (req, res) => {
    res.render('allCourses');
})
app.get('/courseDescription', (req, res) => {
    res.render('courseDescription');
})
app.get('/courseProgress', (req, res) => {
    res.render('courseProgress');
})

app.listen(port, () => {
    console.log('listening');
})