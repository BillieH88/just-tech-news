const express = require('express');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;
const sequilize = require('./config/connection');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

// turn on connection to db and server
app.listen(PORT, () => {
  console.log('Now listening')
  sequelize.sync({force : false});
});
