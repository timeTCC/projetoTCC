const Sequelize = require('sequelize');

module.exports = new Sequelize('tccgenerico', 'root', '286445', {
    host: "localhost",
    dialect: 'mysql'
})