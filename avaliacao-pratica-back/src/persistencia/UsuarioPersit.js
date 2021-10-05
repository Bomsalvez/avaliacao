const db = require('../database/NeDB');

function login(usuario) {
    db.find({email: usuario.email, senha: usuario.senha}, function (err, user) {
        if (err) global.user = ('nao autorizado');
        global.user = user;
    });
    return global.user;
}

function insert(usuario) {
    db.insert(usuario, (err) => {
        if (err) console.log(err)
    });
}


module.exports = {insert, login}