const nedb = require('nedb');
const usuario = new nedb({filename: './src/database/banco_usuario.db', autoload: true});
const site = new nedb({filename: './src/database/banco_site.db', autoload: true});

module.exports = {usuario, site};