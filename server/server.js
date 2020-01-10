const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json());
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
const router = require(`./routes/router`);
app.use(`/portfolio`, router);

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port:', port);
});