const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');

const signin = require('./controllers/signin');
const register = require('./controllers/register');

const db = {

}

const app = express();
app.use(bodyParser.json());
app.use(cors())

app.get('/', (req, res) => {
    res.status(200).send('this is working');
})

app.post('/siginin', signin.handleSignin(db, bcrypt))

app.post('/register', register.handleRegister(db, bcrypt))

const PORT = process.env.PORT
app.listen(3000, () => {
    console.log(`app is running on port 3000`);
})

/*
 * / --> res = this is working
 * /sigin --> POST = success/fail
 * /register --> POST = success/fail
 * /profile ---> GET = user
 * /home --> GET = user
 * /chat --> GET = chat
 */
