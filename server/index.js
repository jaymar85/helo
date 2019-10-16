require('dotenv').config();
const express = require('express');
const app = express();
const massive = require('massive');
const session = require('express-session');

// Controllers
const authController = require("./controllers/authController");
const postController = require("./controllers/postController");

const {CONNECTION_STRING, SERVER_PORT, SESSION_SECRET} = process.env;

// Middle Earth
app.use(express.json());

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7 
    }
}));

// Database Connection
massive(CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance);
    console.log('Connected to database, Yeah!');
})

///// Endpoints /////

// Authentication 
app.get('/auth/user', authController.getSession);
app.post('/auth/register', authController.register);
app.post('/auth/login', authController.login);
app.post('/auth/logout', authController.logout);

// Post
app.get('/api/posts', postController.getPosts);
app.get('/api/posts/title', postController.getPostsByTitle);
app.post('/api/post', postController.addPost);

app.listen(SERVER_PORT, () => {
    console.log(`Server listening on ${SERVER_PORT}`)
});