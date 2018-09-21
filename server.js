const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');

const router = require("./routes");
const config = require('./config/Database');

mongoose.connect(config.DB, {useNewUrlParser:true}).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database' +err)
});

app.use('/', router);
app.set('port', process.env.PORT);

app.listen(app.get('port'), function() {
    console.log('Listening on port:'+app.get('port')+ ". You simply type url in the browser e.g http://localhost:"+app.get('port')+"/");
});