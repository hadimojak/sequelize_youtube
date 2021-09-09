const Sequelize = require('sequelize');
const config = require('../../config/config.json');

const db = new Sequelize('test', 'root', '2525',
    { host: 'localhost', dialect: 'mysql' });


module.exports = db;
global.db = db;