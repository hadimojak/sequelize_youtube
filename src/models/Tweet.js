const { Sequelize, DataTypes } = require('sequelize');
const db = require('../database/connection');


const Tweet = db.define('Tweet', {
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

module.exports = Tweet;