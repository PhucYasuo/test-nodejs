require('dotenv').config();
const express = require('express');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');

const app = express();
const port = process.env.PORT;
const hostname = process.env.HOST_NAME;


// config template engine
configViewEngine(app);

// declare route
app.use('/',webRoutes);

// make sure shit work
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})