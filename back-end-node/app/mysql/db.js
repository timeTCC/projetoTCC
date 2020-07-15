const Sequelize = require('sequelize');

module.exports = new Sequelize('tccgenerico', 'root', 'XM8maxter', {
    host: "localhost",
    dialect: 'mysql'
})
