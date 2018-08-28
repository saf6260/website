const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');

const signin = require('./controllers/signin');
const register = require('./controllers/register');

const db = {

}

const app = express();
app.use(bodyParser.json());

app.post('/siginin', signin.handleSignin(db, bcrypt))

const PORT = process.env.PORT
app.listen(3000, () => {
    console.log(`app is running on port 3000`);
})
