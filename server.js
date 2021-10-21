require('dotenv').config();
const DEVELOPMENT = process.env.NODE_ENV != 'production';
const express = require('express');
const app = express();

module.exports = { app }

const PORT = process.env.PORT || 3000;

//use JSON
app.use(express.json());

//load routes dynamically and add them to app
require('./util/routerLoader.js')(app);

app.listen(PORT, () => {
    console.log(`${(DEVELOPMENT) ? 'Developing' : 'listening'} on http://localhost:${PORT}`);
})