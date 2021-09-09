const { Sequelize, DataTypes } = require('sequelize');
const db = require('../database/connection');


const User = db.define('User', {
    id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    content: DataTypes.STRING(300),
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
});

module.exports = User;