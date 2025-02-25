require('dotenv').config();
const express = require('express');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require('./config/database');

const app = express();
const port = process.env.PORT;
const hostname = process.env.HOST_NAME;

// config template engine
configViewEngine(app);

// declare route
app.use('/',webRoutes);

// connection.query('SELECT * from giaovien', (err, results) => {
//   if (err) {
//       console.error('Lỗi truy vấn: ', err);
//       return;
//   }
//   console.log(">>>results= ", results);
// });

// make sure shit work
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})