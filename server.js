const express = require('express');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;
const sequelize = require('./config/connection');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('dotenv').config();
// turn on routes
app.use(routes);

// turn on connection to db and server
app.listen(PORT, () => {
  console.log(process.env.DB_NAME)
  console.log(process.env.DB_PW)
  console.log(process.env.DB_USER)
  console.log('Now listening')
  sequelize.sync({force : false});
});
