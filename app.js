/* eslint-disable no-unused-vars */
// Imports
const express = require('express');
const { sequelize } = require('./models');
// Server
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routers
app.use('/users', require('./controllers/ControlUser'));
app.use('/posts', require('./controllers/ControlPosts'));

// Listener
const server = app.listen(PORT, async () => {
  console.log(`App is running on PORT: ${PORT}`);
  await sequelize.authenticate();
  // await sequelize.sync({force:true});
  console.log('Db is synced');
});
