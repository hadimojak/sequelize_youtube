const { Sequelize, DataTypes } = require('sequelize');
const db = require('../database/connection');


const User = db.define('User', {
    id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING(37),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(20),
        allowNull: false
    }
});

module.exports = User;