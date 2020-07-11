const Sequelize = require('sequelize');
const db = require('../mysql/db');

const Users = db.define('users', {
    userId: {
        type: db.Sequelize.INTEGER, primaryKey: true
    },
    userName: {
        type: db.Sequelize.STRING
    },
    userPassword: {
        type: db.Sequelize.STRING
    }
}, {
    timestamps: false
})

//exporto o modulo 
module.exports = Users;