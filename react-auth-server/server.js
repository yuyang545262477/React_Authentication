// server.js

const express = require('express');
const app = express();
const jwt = require('express-jwt');
const cors = require('cors');


app.use(cors());

const authCheck = jwt({
    secret: new Buffer('1bh9DalMFZ0c92nKd1gSbQNZdIIwRIQMYTJlK56y_OtL8F1gB_yVtX-15OlBXt3R', 'base64'),
    audience: 'NSkUrK2p488SsmzIJYnxSeoETgwEUMoS'
});


// json data
var contacts = [
    {
        id: 1,
        name: 'Chris Sevilleja',
        email: 'chris@scotch.io',
        image: '//gravatar.com/avatar/8a8bf3a2c952984defbd6bb48304b38e?s=200'
    },
    {
        id: 2,
        name: 'Nick Cerminara',
        email: 'nick@scotch.io',
        image: '//gravatar.com/avatar/5d0008252214234c609144ff3adf62cf?s=200'
    },
    {
        id: 3,
        name: 'Ado Kukic',
        email: 'ado@scotch.io',
        image: '//gravatar.com/avatar/99c4080f412ccf46b9b564db7f482907?s=200'
    },
    {
        id: 4,
        name: 'Holly Lloyd',
        email: 'holly@scotch.io',
        image: '//gravatar.com/avatar/5e074956ee8ba1fea26e30d28c190495?s=200'
    },
    {
        id: 5,
        name: 'Ryan Chenkie',
        email: 'ryan@scotch.io',
        image: '//gravatar.com/avatar/7f4ec37467f2f7db6fffc7b4d2cc8dc2?s=200'
    }
];

//restFul api

app.get('/api/contacts', (req, res)=> {
        const allContacts = contacts.map(contact =>({id: contact.id, name: contact.name}));
        res.json(allContacts);
    }
);

app.get('/api/contacts/:id', authCheck, (req, res)=> {
    res.json(contacts.filter(contact=>contact.id === parseInt(req.params.id)));
});

app.listen(3001);
console.log('Listen on the website http://localhost:3000');

