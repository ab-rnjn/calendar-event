const express = require('express');
const app = express();
const Cors = require('cors')
const { connectToServer } = require('./Utility/mongoClient');
const bodyParser = require('body-parser');
const AuthService = require('./services/AuthService');
const EventService = require('./services/EventService');
const jwt = require('jsonwebtoken');
const config = require('../backend/config');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(Cors());

// app.use(function (req, res, next) {
//     if (!req.headers.authorization) {
//         return res.status(403).json({ error: 'Permission Denied' });
//     }
//     try {
//         const token = req.get('authorization');
//         jwt.verify(token, config.secretKey);
//     } catch (err) {
//         console.log(err);
//         return res.status(403).json({ error: 'Permission Denied' });
//     }
//     next();
// });

//================================================ Services =============================================================

app.get('/getEvents/:month', EventService.fetchEvents);
app.post('/updateEvents', EventService.updateEvents);


const distDir = __dirname + "/../build/";
console.log('dir', distDir);
app.use( express.static("./build/"));

app.get('*', function(req, res) {
  res.sendfile('./build/index.html');
})

app.set( 'port',  (process.env.PORT || 5000));

const server = app.listen(app.get('port'), () => {
    connectToServer((db) => {
        console.log('App is listening on : ', app.get('port') );
    });
})

