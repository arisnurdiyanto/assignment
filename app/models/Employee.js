const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Employee = sequelize.define('Employee', {
  nama: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  jabatan: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gaji: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Employee;