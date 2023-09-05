const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nama_database', 'nama_user', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;