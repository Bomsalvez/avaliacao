const nedb = require('nedb');
const db = new nedb({filename: './src/database/banco.db', autoload: true});

module.exports = db;